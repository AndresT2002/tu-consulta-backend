import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsInt,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AppointmentStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicalAppointmentDto {

  @ApiProperty({
    example: '182391839123',
    required: true
  })
  @IsNotEmpty()
  @IsUUID()
  patientId: string;

  @ApiProperty({
    example: '182391839123',
    required: true
  })
  @IsNotEmpty()
  @IsUUID()
  doctorId: string;

  @ApiProperty({
    example: 'local.com/room/123',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  roomUrl: string;

  @ApiProperty({
    example: 'symptoms',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  symptoms: string;

  @ApiProperty({
    example: 'Patient has a cold',
    required: false
  })
  @IsOptional()
  @IsString()
  diagnosis?: string;

  @ApiProperty({
    example: 'Patient should take a rest',
    required: false
  })
  @IsOptional()
  @IsString()
  treatment?: string;

  @ApiProperty({
    example: 'Patient should take a rest',
    required: false
  })
  @IsOptional()
  @IsString()
  observations?: string;

  @ApiProperty({
    example: 'Patient should take pills',
    required: false
  })
  @IsOptional()
  @IsString()
  recommendations?: string;

  @ApiProperty({
    example: 'Very good atention from the doctor',
    required: false
  })
  @IsOptional()
  @IsString()
  patientComments?: string;

  @ApiProperty({
    example: 5,
    required: false
  })
  @IsNotEmpty()
  @IsInt()
  rating: number;

  @ApiProperty({
    example: new Date(),
    required: false
  })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty({
    example: AppointmentStatus.COMPLETED,
    required: false
  })
  @IsNotEmpty()
  @IsString()
  appointmentStatus: AppointmentStatus;
}