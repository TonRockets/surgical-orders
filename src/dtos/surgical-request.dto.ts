import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SurgicalRequestDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    room: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    procedures: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    doctor?: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    patient?: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    hospital: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    surgeryDate: Date;
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    generalObservations?: string;
}