import { PartialType } from '@nestjs/swagger';
import { CreateMedicalAppointmentDto } from './create-medical-appointment.dto';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsUUID, IsString, IsOptional, IsInt, IsDate } from 'class-validator';
import { AppointmentStatus } from '@prisma/client';

export class UpdateMedicalAppointmentDto extends PartialType(
  CreateMedicalAppointmentDto,
) {
  @IsNotEmpty()
  @IsUUID()
  patientId: string;

  @IsNotEmpty()
  @IsUUID()
  doctorId: string;

  @IsNotEmpty()
  @IsString()
  roomUrl: string;

  @IsNotEmpty()
  @IsString()
  symptoms: string;

  @IsOptional()
  @IsString()
  diagnosis?: string;

  @IsOptional()
  @IsString()
  treatment?: string;

  @IsOptional()
  @IsString()
  observations?: string;

  @IsOptional()
  @IsString()
  recommendations?: string;

  @IsOptional()
  @IsString()
  patientComments?: string;

  @IsNotEmpty()
  @IsInt()
  rating: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsNotEmpty()
  @IsString()
  appointmentStatus: AppointmentStatus;
}
