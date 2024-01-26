import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalRequestService } from './surgical-request.service';
import { PrismaService } from './prisma.service';
import { SurgicalRequestModel } from '../models/surgical-requests.model';

describe('SurgicalRequestService', () => {
  let sut: SurgicalRequestService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurgicalRequestService,
        {
          provide: PrismaService,
          useValue: {
            surgicalRequestEntity: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    sut = module.get<SurgicalRequestService>(SurgicalRequestService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should create a surgical-request-service request', async () => {
    const testData: SurgicalRequestModel = {
        room: 'any_room',
        hospital: 'any_hospital',
        procedures: 'any_procedure',
        surgeryDate: "2024-01-26T19:58:59.707Z" as unknown as Date,
        creationDate: new Date(),
    };

    await sut.createSurgicalRequest(testData);

    expect(prismaService.surgicalRequestEntity.create).toHaveBeenCalledWith({
      data: testData,
    });
  });

  it('should return a list of surgicalRequest on success', async () => {
    const surgicalResult: SurgicalRequestModel[] = [
      {
        room: 'any_room',
        hospital: 'any_hospital',
        procedures: 'any_procedure',
        surgeryDate: new Date(),
        creationDate: new Date(),
      }
    ];

    jest.spyOn(sut, 'getAllSurgicalRequests').mockReturnValueOnce(Promise.resolve(surgicalResult))
    const result = await sut.getAllSurgicalRequests();
    expect(result).toEqual(surgicalResult);
  });

  it('should return a specific surgicalRequest on success', async () => {
    const surgicalId: number = 1
    const surgicalResult: SurgicalRequestModel = {
        room: 'any_room',
        hospital: 'any_hospital',
        procedures: 'any_procedure',
        surgeryDate: new Date(),
        creationDate: new Date(),
      }

    jest.spyOn(sut, 'getSurgicalRequestById').mockReturnValueOnce(Promise.resolve(surgicalResult))
    const result = await sut.getSurgicalRequestById(surgicalId);
    expect(result).toEqual(surgicalResult);
  })

  it('should', async () => {})

  it('should throw an error if PrismaService throws', async () => {
    jest.spyOn(prismaService.surgicalRequestEntity, 'findMany').mockRejectedValue(new Error())
    const result = sut.getAllSurgicalRequests()
    await expect(result).rejects.toThrow()
  })
})