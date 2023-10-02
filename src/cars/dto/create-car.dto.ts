import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({message : "La Brand es requerido"})
    readonly brand: string;
    @IsString()
    @MinLength(2, {message : "se necesitan mas de dos caracter en model"})
    readonly model: string;
}