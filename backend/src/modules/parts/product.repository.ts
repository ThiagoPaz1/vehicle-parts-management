import { CreatePartDto } from './dto/create-part.dto';
import { prisma } from 'src/database/client';
import { OrderBy } from 'src/types';

export class PartRepository {
  async create(data: CreatePartDto) {
    return await prisma.parts.create({ data });
  }

  async getAll(skip?: number, take?: number, orderBy?: OrderBy) {
    return await prisma.parts.findMany({
      orderBy: {
        id: orderBy,
      },
      skip,
      take,
    });
  }
}
