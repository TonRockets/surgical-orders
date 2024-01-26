import { Body, Controller, Get, Post, Param, Put, Delete } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { SurgicalRequestDTO } from "../dtos/surgical-request.dto";
import { SurgicalRequestService } from "../services/surgical-request.service";
import { serverError, ok } from "../helpers/http.helper";
import { HttpResponse } from "../interfaces/http-response";

@Controller('surgical-request')
@ApiTags('surgical-request')
export class SurgicalRequesController {
    constructor(private readonly surgicalRequestService: SurgicalRequestService) { }

    @Get('/')
    @ApiCreatedResponse({type: SurgicalRequestDTO})
    async getAllSurgicalRequests(): Promise<HttpResponse> {
      try {
        const result = await this.surgicalRequestService.getAllSurgicalRequests();
        return ok(result)
      } catch (error) {
        console.log(error.message);
        throw serverError(error)
      }
    }

    @Get('/:id')
    @ApiCreatedResponse({type: SurgicalRequestDTO})
    async getSurgicalRequests(@Param('id') id: string): Promise<HttpResponse> {
      try {
        const result = await this.surgicalRequestService.getSurgicalRequestById(Number(id));
        return ok(result)
      } catch (error) {
        console.log(error.message);
        return serverError(error)
      }
    }

    @Post()
    async createSurgicalRequest(@Body() data: SurgicalRequestDTO): Promise<HttpResponse> {
      try {
        const result = await this.surgicalRequestService.createSurgicalRequest(data);
        return ok(result)
      } catch (error) {
        console.log(error.message);
        return serverError(error)
      }
    }

    @Put('/:id')
    async updateSurgicalRequest(
      @Param('id') id: number,
      @Body() data: SurgicalRequestDTO,
    ): Promise<HttpResponse> {
      try {
        const result = this.surgicalRequestService.updateSurgicalRequest(Number(id), data);
        return ok(result)
      } catch (error) {
        console.log(error.message);
        return serverError(error)
      }
    }

    @Delete('/:id')
    async deleteSurgicalRequest(@Param('id') id: number): Promise<HttpResponse> {
      try {
        console.log("ID NO CONTROLLER -->> ", id);
        
        const result = this.surgicalRequestService.deleteSurgicalRequest(Number(id));
        return ok(result)
      } catch (error) {
        console.log(error.message);
        return serverError(error)
      }
    }
}