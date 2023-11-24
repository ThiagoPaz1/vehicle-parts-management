import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePartDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
