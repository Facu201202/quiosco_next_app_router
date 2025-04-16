import { PrismaClient } from '../app/generated/prisma';
import { categories } from './data/categories';
import { products } from './data/products';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({ data: categories });
  await prisma.product.createMany({ data: products });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
