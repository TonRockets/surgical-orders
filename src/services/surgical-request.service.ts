import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { SurgicalRequestModel } from "src/models/surgical-requests.model";

@Injectable()
export class SurgicalRequestService {
    constructor(private readonly prisma: PrismaService) { }
    
    async createSurgicalRequest(data: SurgicalRequestModel): Promise<void> {
      await this.prisma.surgicalRequestEntity.create({
          data: {
            ...data,
            surgeryDate: new Date(data.surgeryDate).toISOString()
          }
        });
    }

    async getAllSurgicalRequests(): Promise<SurgicalRequestModel[]> {
        const surgicalData = await this.prisma.surgicalRequestEntity.findMany();
        return surgicalData;
    }

    async getSurgicalRequestById(id: number): Promise<SurgicalRequestModel> {
        return this.prisma.surgicalRequestEntity.findUnique({
          where: { id },
        });
    }
    
    async updateSurgicalRequest(id: number, data: SurgicalRequestModel): Promise<SurgicalRequestModel> {
        return this.prisma.surgicalRequestEntity.update({
          where: { id },
          data,
        });
    }
    
    async deleteSurgicalRequest(id: number): Promise<SurgicalRequestModel> {
        console.log('ID NO SERVICE -->> ', id);
        
        return this.prisma.surgicalRequestEntity.delete({
          where: { id },
        });
      }
}