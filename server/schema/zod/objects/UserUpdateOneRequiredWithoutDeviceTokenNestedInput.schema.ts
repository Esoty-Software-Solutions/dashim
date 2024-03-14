/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';
import { UserCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './UserCreateOrConnectWithoutDeviceTokenInput.schema';
import { UserUpsertWithoutDeviceTokenInputObjectSchema } from './UserUpsertWithoutDeviceTokenInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDeviceTokenInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDeviceTokenInput.schema';
import { UserUpdateWithoutDeviceTokenInputObjectSchema } from './UserUpdateWithoutDeviceTokenInput.schema';
import { UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedUpdateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutDeviceTokenNestedInput>;
export const UserUpdateOneRequiredWithoutDeviceTokenNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDeviceTokenInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutDeviceTokenInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => UserUpdateWithoutDeviceTokenInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
