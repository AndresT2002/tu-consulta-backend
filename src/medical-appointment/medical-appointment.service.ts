import { Injectable } from '@nestjs/common';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MedicalAppointmentService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMedicalAppointmentDto: CreateMedicalAppointmentDto) {
    return 'This action adds a new medicalAppointment';
  }

  findAll() {
    return this.prismaService.medicalAppointment.findMany();
  }

  findOne(id: string) {
    return this.prismaService.medicalAppointment.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMedicalAppointmentDto: UpdateMedicalAppointmentDto) {
    return `This action updates a #${id} medicalAppointment`;
  }

  remove(id: string) {
    return this.prismaService.medicalAppointment.delete({
      where: {
        id,
      },
    });
  }
}
