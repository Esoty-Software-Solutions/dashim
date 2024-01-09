import { PrismaClient, type Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { User } from '@models/user'
import { create } from 'domain'
import cuid2 from '@paralleldrive/cuid2'
import { SeedHelper } from '../scripts/generateSeederFiles'
import { Gender } from '../../app/server/models/gender.server'
import { DeviceToken } from '../src/models/deviceToken'
import { fakeDeviceToken } from './fakeData/functions'
import { genderEnum } from './enumData'

const prisma = new PrismaClient()

await prisma.$connect()
console.info('prisma connected...')

await prisma.gender.createMany({ data: genderEnum })
console.info('gender created')
const genderIds = await prisma.gender.findMany({ select: { id: true } })
console.log('genderIds')
console.log(genderIds)

async function createFakeUser(genderId?: string) {
  const user: Prisma.UserCreateManyInput = {
    ...SeedHelper.functions.fakeUserComplete(),
    genderId,
    id: cuid2.createId(),
    passwordHash: await bcrypt.hash('123', 10),
    createdAt: new Date(),
  }

  console.log('user before\n', user)
  // console.log('user.deviceToken before\n', user.deviceToken)
  // console.log('user.deviceToken.deviceType before\n', user.deviceToken?.connect)
  await SeedHelper.fieldOverride(user)
  console.log('user after\n', user)
  // console.log('user.deviceToken after\n', user.deviceToken)
  // SeedHelper.fieldOverride(user.data.deviceToken) // TODO: FIX THIS FUCKING THING

  return user
}

// console.log('user')
// console.log(await createFakeUser())

async function addUsers(count: number) {
  const users: Prisma.UserCreateInput[] = []
  const deviceTokens: Prisma.DeviceTokenCreateInput[] = []
  for (let i = 0; i < count; i++) {
    const genderId = genderIds[Math.floor(Math.random() * genderIds.length)].id
    // console.log('genderId', genderId)
    users.push(await createFakeUser(genderId))
  }

  await prisma.user.createMany({ data: users })
}

await addUsers(1)
