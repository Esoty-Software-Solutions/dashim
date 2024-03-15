/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutOwnerOfInputObjectSchema } from './UserUpdateWithoutOwnerOfInput.schema';
import { UserUncheckedUpdateWithoutOwnerOfInputObjectSchema } from './UserUncheckedUpdateWithoutOwnerOfInput.schema';
import { UserCreateWithoutOwnerOfInputObjectSchema } from './UserCreateWithoutOwnerOfInput.schema';
import { UserUncheckedCreateWithoutOwnerOfInputObjectSchema } from './UserUncheckedCreateWithoutOwnerOfInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutOwnerOfInput>;
export const UserUpsertWithoutOwnerOfInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutOwnerOfInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutOwnerOfInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutOwnerOfInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutOwnerOfInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
