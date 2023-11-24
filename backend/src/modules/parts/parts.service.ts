import { Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PartsRepository } from './product.repository';

@Injectable()
export class PartsService {
  constructor(private partsRepository: PartsRepository) {}

  async create(createPartDto: CreatePartDto) {
    return await this.partsRepository.create(createPartDto);
  }

  async findAll(skip?: number, take?: number) {
    skip = skip ? skip : 0;
    take = take ? take : 0;

    return await this.partsRepository.getAll(skip, take);
  }

  findOne(id: number) {
    return `This action returns a #${id} part`;
  }

  update(id: number, updatePartDto: UpdatePartDto) {
    return `This action updates a #${id} part`;
  }

  remove(id: number) {
    return `This action removes a #${id} part`;
  }
}
