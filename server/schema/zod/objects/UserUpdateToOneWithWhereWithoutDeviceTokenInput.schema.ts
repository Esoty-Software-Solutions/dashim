/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDeviceTokenInputObjectSchema } from './UserUpdateWithoutDeviceTokenInput.schema';
import { UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedUpdateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDeviceTokenInput>;
export const UserUpdateToOneWithWhereWithoutDeviceTokenInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutDeviceTokenInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
