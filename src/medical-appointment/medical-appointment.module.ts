import { Module } from '@nestjs/common';
import { MedicalAppointmentService } from './medical-appointment.service';
import { MedicalAppointmentController } from './medical-appointment.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [MedicalAppointmentController],
  providers: [MedicalAppointmentService],
  imports: [PrismaClient],
})
export class MedicalAppointmentModule {}
