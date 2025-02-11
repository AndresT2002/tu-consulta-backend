import { Injectable } from '@nestjs/common';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MedicalAppointmentService {
    constructor(private readonly prismaService: PrismaService) { }

    create(createMedicalAppointmentDto: CreateMedicalAppointmentDto) {

        return this.prismaService.medicalAppointment.create({
            data: createMedicalAppointmentDto
        });
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

    update(id: string, updateMedicalAppointmentDto: UpdateMedicalAppointmentDto) {
        const { patientId, doctorId, ...updateData } = updateMedicalAppointmentDto;

        return this.prismaService.medicalAppointment.update({
            where: { id },
            data: {
                ...updateData,
                ...(patientId && {
                    patient: {
                        connect: { id: patientId },
                    },
                }),
                ...(doctorId && {
                    doctor: {
                        connect: { id: doctorId },
                    },
                }),
            },
        });
    }

    remove(id: string) {
        return this.prismaService.medicalAppointment.delete({
            where: {
                id,
            },
        });
    }
}
