import { IsString } from "class-validator";

export class CreateCarDto {
    @IsString({message : "La Brand es requerido"})
    readonly brand: string;
    @IsString()
    readonly model: string;
}