/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOwnerOfInputObjectSchema } from './UserUpdateWithoutOwnerOfInput.schema';
import { UserUncheckedUpdateWithoutOwnerOfInputObjectSchema } from './UserUncheckedUpdateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnerOfInput>;
export const UserUpdateToOneWithWhereWithoutOwnerOfInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutOwnerOfInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutOwnerOfInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
