import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()

// JSONボディをexpressが解析できるようにする
app.use(express.json())

const PORT = 8080

const router = express.Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient()
  const allUsers = await prisma.users.findMany()
  res.json(allUsers)
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient()
  const data = req.body
  console.log(data)
  const createdUser = await prisma.users.create({ data })
  res.json(createdUser)
})

router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient()
  const data = { where: { id: req.body.id }, data: req.body }
  const updatedUser = await prisma.users.update(data)
  res.json(updatedUser)
})

router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient()
  const data = { where: { id: req.body.id } }
  const deletedUser = await prisma.users.delete(data)
  res.json(deletedUser)
})

// routerをappに接続する
app.use(router)

app.listen(PORT, () => {
  console.log('server is listening on port: ', PORT)
})
