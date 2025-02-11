import { Module } from '@nestjs/common';
import { MedicalAppointmentService } from './medical-appointment.service';
import { MedicalAppointmentController } from './medical-appointment.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  controllers: [MedicalAppointmentController],
  providers: [MedicalAppointmentService],
  imports: [PrismaModule],
})
export class MedicalAppointmentModule {}
