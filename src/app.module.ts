import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalAppointmentModule } from './medical-appointment/medical-appointment.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [MedicalAppointmentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
