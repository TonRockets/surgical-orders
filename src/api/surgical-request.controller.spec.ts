import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalRequesController } from './surgical-request.controller';
import { SurgicalRequestService } from '../services/surgical-request.service';
import { SurgicalRequestDTO } from '../dtos/surgical-request.dto';
import { PrismaService } from '../services/prisma.service';

describe('AppController', () => {
    let sut: SurgicalRequesController;
    // let service: SurgicalRequestService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        providers: [SurgicalRequestService,
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
      controllers: [SurgicalRequesController],
    }).compile();

      sut = app.get<SurgicalRequesController>(SurgicalRequesController);
      // service = app.get<SurgicalRequestService>(SurgicalRequestService);
  });

  describe('root', () => {
      it('should return 200 if data is provided', () => {
        
    const fakeRequest: SurgicalRequestDTO = {
        room: 'any_room',
        hospital: 'any_hospital',
        procedures: 'any_procedure',
        surgeryDate: new Date(),
    }
      sut.createSurgicalRequest(fakeRequest)
    });
  });
});