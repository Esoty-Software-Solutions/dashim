import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { User } from '@models/user'
import { create } from 'domain'
import cuid2 from '@paralleldrive/cuid2'
import { SeedHelper } from '../scripts/generateSeederFiles'
import { Gender } from '../../app/server/models/gender.server'
import { DeviceToken } from '../src/models/deviceToken'
import { fakeDeviceToken } from './fakeData/functions'
import * as enums from './enumData'
import { Institution } from '~/models/institution'
import { SubscriberGroup } from '../../app/server/models/subscriberGroup.server'
import { InsurancePolicy } from '~/models/insurancePolicy'

const prisma = new PrismaClient()

await prisma.$connect()
console.info('prisma connected...')

try {
  console.info('creating enums...')
  await Promise.all([
    prisma.gender.createMany({ data: enums.genderEnum }),
    prisma.tenantType.createMany({ data: enums.tenantTypeEnum }),
    prisma.role.createMany({ data: enums.roleEnum }),
    prisma.deviceType.createMany({ data: enums.deviceTypeEnum }),
    prisma.relationship.createMany({ data: enums.relationshipEnum }),
    prisma.fingerType.createMany({ data: enums.fingerType }),
  ])
  console.info('enums created...')
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === 'P2002') {
      console.info('enums already exist...')
    } else {
      console.error(e)
    }
  } else {
    console.error(e)
  }
}

console.info('getting enums ids...')
// TODO: put these in an object
const genderIds = await prisma.gender.findMany({ select: { id: true } })
const tenantTypeIds = await prisma.tenantType.findMany({ select: { id: true } })
const roleIds = await prisma.role.findMany({ select: { id: true } })
const deviceTypeIds = await prisma.deviceType.findMany({ select: { id: true } })
const relationshipEnum = await prisma.relationship.findMany({
  select: { id: true, name: true },
})

const relationshipObject: { [key: string]: string } = relationshipEnum.reduce(
  (obj, item) => {
    return {
      ...obj,
      [item.name]: item.id,
    }
  },
  {}
)
const fingerTypeIds = await prisma.fingerType.findMany({ select: { id: true } })
console.info('enums ids received...')

async function createFakeUser(genderId?: string) {
  const data: Prisma.UserCreateManyInput = {
    ...SeedHelper.functions.fakeUserComplete(),
    genderId,
    id: cuid2.createId(),
    passwordHash: await bcrypt.hash('123', 10),
    createdAt: new Date(),
  }
  // console.log('user before\n', user)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', user)
  return data
}

async function createFakeDeviceToken(userId: string, deviceTypeId: string) {
  const data: Prisma.DeviceTokenCreateManyInput = {
    ...SeedHelper.functions.fakeDeviceTokenComplete(),
    userId,
    deviceTypeId,
    id: cuid2.createId(),
    createdAt: new Date(),
  }
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', data)
  return data
}

async function addUsers(count: number) {
  const probability = 0.9
  console.log(
    'adding ',
    count,
    ' users with device tokens',
    probability * 100,
    '% of the time...'
  )
  const users: Prisma.UserCreateInput[] = []
  const deviceTokens: Prisma.DeviceTokenCreateManyInput[] = []
  users.push({
    ...(await createFakeUser(genderIds[0].id)),
    email: 'test@test.com',
    username: 'test',
    passwordHash: await bcrypt.hash('123', 10),
  }) // fake static user
  for (let i = 0; i < count; i++) {
    const genderId = genderIds[Math.floor(Math.random() * genderIds.length)].id
    const deviceTypeId =
      deviceTypeIds[Math.floor(Math.random() * deviceTypeIds.length)].id
    // console.log('genderId', genderId)
    const user = await createFakeUser(genderId)
    users.push(user)
    if (Math.random() > 0.9) continue // 10% chance to not create device token
    const deviceToken = await createFakeDeviceToken(user.id, deviceTypeId)
    deviceTokens.push(deviceToken)
  }
  // TODO: make the prisma actions below a transaction
  console.log('starting the prisma calls...')
  await prisma.user.createMany({ data: users })
  await prisma.deviceToken.createMany({ data: deviceTokens })
  console.log('done...')
}

async function createFakeInstitution() {
  const data: Prisma.InstitutionCreateManyInput = {
    ...SeedHelper.functions.fakeInstitutionComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
  }
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', data)
  return data
}

async function createFakeSubscriber(
  institutionId: string,
  insurancePolicyId: string
) {
  const data: Prisma.SubscriberCreateManyInput = {
    ...SeedHelper.functions.fakeSubscriberComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    institutionId,
    insurancePolicyId,
  }
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', data)
  return data
}

async function createFakeSubscriberGroup(
  genderIds: string,
  subscriberId: string,
  relationshipId: string
) {
  const data: Prisma.SubscriberGroupCreateManyInput = {
    ...SeedHelper.functions.fakeSubscriberGroupComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    genderId: genderIds,
    subscriberId: subscriberId,
    relationshipId,
  }
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', data)
  return data
}

async function createFakeTenant() {
  const data: Prisma.TenantCreateManyInput = {
    ...SeedHelper.functions.fakeTenantComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
  }
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', data)
  return data
}

async function createFakeInsurancePolicy(institutionId: string) {
  const data: Prisma.InsurancePolicyCreateManyInput = {
    ...SeedHelper.functions.fakeInsurancePolicyComplete(),
    id: cuid2.createId(),
    createdAt: new Date(),
    institutionId,
  }
  // console.log('user before\n', data)
  await SeedHelper.fieldOverride(data)
  // console.log('user after\n', data)
  return data
}

async function addInstitutions(
  institutionCount: number,
  SubscriberAverageCount: number,
  maxSubscriberGroupSize: number = 10
) {
  const probability = 0.9
  console.log(
    'adding ',
    institutionCount,
    ' institutions with',
    SubscriberAverageCount,
    'subscribers each with a max group size of ',
    maxSubscriberGroupSize,
    '...'
  )
  const institutions: Prisma.InstitutionCreateManyInput[] = []
  const subscribers: Prisma.SubscriberCreateManyInput[] = []
  const subscribersGroups: Prisma.SubscriberGroupCreateManyInput[] = []
  const tenants: Prisma.TenantCreateManyInput[] = []
  const insurancePolicys: Prisma.InsurancePolicyCreateManyInput[] = []
  for (let i = 0; i < institutionCount; i++) {
    const institution = await createFakeInstitution()
    institutions.push(institution)
    const insurancePolicy = await createFakeInsurancePolicy(institution.id)
    insurancePolicys.push(insurancePolicy)
    // const tenant = await SeedHelper.functions.fakeTenantComplete()
    // tenants.push(tenant)
    for (let k = 0; k < SubscriberAverageCount; k++) {
      // console.log('subscriber', k)
      const subscriber = await createFakeSubscriber(
        institution.id,
        insurancePolicy.id
      )
      subscribers.push(subscriber)
      const subscriberGroupCount = Math.ceil(
        Math.pow(Math.random(), 2.5) * maxSubscriberGroupSize
      )
      let relationshipCopy = [...relationshipEnum]
      let relationshipId
      for (let j = 0; j < subscriberGroupCount; j++) {
        // console.log('subscriberGroup', j)
        const genderId =
          genderIds[Math.floor(Math.random() * genderIds.length)].id

        const selfRelationShipId = relationshipObject['self']
        if (j === 0) {
          relationshipId = relationshipObject['self']
          // Remove 'self' from relationshipCopy
          // console.log(
          //   'relationshipCopy  length before',
          //   relationshipCopy.length,
          //   '\n',
          //   relationshipCopy
          // )
          relationshipCopy = relationshipCopy.filter(
            (item) => item.name !== 'self'
          )
          // console.log(
          //   'relationshipCopy  length after',
          //   relationshipCopy.length,
          //   '\n',
          //   relationshipCopy
          // )
        } else {
          relationshipId =
            relationshipCopy[
              Math.floor(Math.random() * relationshipCopy.length)
            ].id
          if (relationshipId === selfRelationShipId) {
            console.error('self relationship is repeated')
          }
        }
        const subscriberGroup = await createFakeSubscriberGroup(
          genderId,
          subscriber.id,
          relationshipId
        )
        subscribersGroups.push(subscriberGroup)
      }
    }

    if (Math.random() > 0.9) continue // 10% chance to not create device token
  }
  // TODO: make the prisma actions below a transaction
  console.log('starting the prisma calls...')
  // await prisma.tenant.createMany({ data: tenants })
  await prisma.institution.createMany({ data: institutions })
  await prisma.insurancePolicy.createMany({ data: insurancePolicys })
  await prisma.subscriber.createMany({ data: subscribers })
  await prisma.subscriberGroup.createMany({ data: subscribersGroups })
  console.log('done...')
}

// TODO: add timer to see how long it takes to run
await addUsers(1500)
await addInstitutions(10, 10000, 13)
