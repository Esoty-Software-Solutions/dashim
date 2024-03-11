/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';
import { UserCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './UserCreateOrConnectWithoutDeviceTokenInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutDeviceTokenInput>;
export const UserCreateNestedOneWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDeviceTokenInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
