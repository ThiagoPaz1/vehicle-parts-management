import { PartialType } from '@nestjs/mapped-types';
import { CreatePartDto } from './create-part.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePartDto extends PartialType(CreatePartDto) {
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  brand: string;

  @IsNumber()
  price: number;
}
