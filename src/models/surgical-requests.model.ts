import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'

export class SurgicalRequestModel implements Prisma.SurgicalRequestEntityCreateInput {
  @ApiProperty({
    readOnly: true,
    uniqueItems: true,
  })
  id?: number

  @ApiProperty({
    readOnly: true,
    uniqueItems: true,
  })
  code?: number

  @ApiProperty({
    example: 'Surgical-1',
    required: true,
    type: String
  })
  room: string

  @ApiProperty({
    example: 'Appendicitis',
    required: true,
    type: String
  })
  procedures: string

  @ApiProperty({
    example: 'Jonh Doe',
    required: false,
    type: String
  })
  doctor?: string

  @ApiProperty({
    example: 'Jonh Doe Jr',
    required: false,
    type: String
  })
  patient?: string

  @ApiProperty({
    example: 'Brazil Hospital',
    required: true,
    type: String
  })
  hospital: string

  @ApiProperty({
    example: '24/03/2023',
    required: true,
    type: Date
  })
  surgeryDate: Date
  
  @ApiProperty({
    example: '24/03/2023',
    required: true,
    type: Date
  })
  creationDate?: Date

  @ApiProperty({
    example: 'Any observation about the patient',
    required: false,
    type: String
  })
  generalObservations?: string
}
