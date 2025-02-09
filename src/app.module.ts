import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalAppointmentService } from './medical-appointment/medical-appointment.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MedicalAppointmentService],
})
export class AppModule {}
