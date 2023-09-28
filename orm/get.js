const PrismaClient = require("@prisma/client")

const prisma = new PrismaClient();

// 全ユーザーを取得する
async function getAllUsers() {
  const allUsers = await prisma.users.findMany();
  console.log('All users:', allUsers);
}

getAllUsers().finally(() => prisma.$disconnect())
