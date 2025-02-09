import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalAppointmentModule } from './medical-appointment/medical-appointment.module';

@Module({
  imports: [MedicalAppointmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
