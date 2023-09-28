const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

// ユーザーを作成する
async function main() {
  const newUser = await prisma.users.create({
    data: {
      name: 'Bob',
      age: 26
    }
  })

  console.log('Created new User:', newUser)
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
