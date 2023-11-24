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

  findAll() {
    return `This action returns all parts`;
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
