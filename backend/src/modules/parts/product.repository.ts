import { CreatePartDto } from './dto/create-part.dto';
import { prisma } from 'src/database/client';

export class PartsRepository {
  async create(data: CreatePartDto) {
    return await prisma.parts.create({ data });
  }

  async getAll(skip?: number, take?: number) {
    if (!skip && !take) return await prisma.parts.findMany();

    return await prisma.parts.findMany({
      skip,
      take,
    });
  }
}
