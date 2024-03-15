/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutDeviceTokenInput>;
export const UserCreateOrConnectWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
