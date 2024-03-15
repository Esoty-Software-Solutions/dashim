/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutDeviceTokenInputObjectSchema } from './UserUpdateWithoutDeviceTokenInput.schema';
import { UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedUpdateWithoutDeviceTokenInput.schema';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutDeviceTokenInput>;
export const UserUpsertWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
