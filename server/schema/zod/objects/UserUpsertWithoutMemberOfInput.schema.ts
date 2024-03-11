/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutMemberOfInputObjectSchema } from './UserUpdateWithoutMemberOfInput.schema';
import { UserUncheckedUpdateWithoutMemberOfInputObjectSchema } from './UserUncheckedUpdateWithoutMemberOfInput.schema';
import { UserCreateWithoutMemberOfInputObjectSchema } from './UserCreateWithoutMemberOfInput.schema';
import { UserUncheckedCreateWithoutMemberOfInputObjectSchema } from './UserUncheckedCreateWithoutMemberOfInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutMemberOfInput>;
export const UserUpsertWithoutMemberOfInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutMemberOfInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutMemberOfInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutMemberOfInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutMemberOfInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
