import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsOptional, IsString, IsInt, Min, IsEnum, Max, IsBoolean } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'Correo electrónico del usuario', example: 'user@example.com' })
    @IsEmail()
    email: string;

    @ApiPropertyOptional({ description: 'Nombre del usuario', example: 'John' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ description: 'Apellido del usuario', example: 'Doe' })
    @IsOptional()
    @IsString()
    lastName?: string;

    @ApiProperty({ description: 'Cantidad de tokens del usuario', example: 100 })
    @IsInt()
    @Min(0)
    tokens: number;

    @ApiPropertyOptional({ description: 'Imagen de perfil del usuario', example: 'https://example.com/image.jpg' })
    @IsOptional()
    profileImage?: string;


    @ApiProperty({ description: 'Rating del usuario', example: 5 })
    @IsInt()
    @Min(0)
    @Max(5)
    rating: number;


    @ApiProperty({ description: 'Estado de habilitación del usuario', example: true })
    @IsBoolean()
    enabled: boolean;



    @ApiProperty({ description: 'Rol del usuario', enum: Role, example: Role.PATIENT })
    @IsEnum(Role)
    role: Role;
}