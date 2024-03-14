/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutMemberOfInputObjectSchema } from './UserUpdateWithoutMemberOfInput.schema';
import { UserUncheckedUpdateWithoutMemberOfInputObjectSchema } from './UserUncheckedUpdateWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutMemberOfInput>;
export const UserUpdateToOneWithWhereWithoutMemberOfInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutMemberOfInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutMemberOfInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
