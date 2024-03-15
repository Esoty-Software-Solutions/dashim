/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOwnerOfInputObjectSchema } from './UserCreateWithoutOwnerOfInput.schema';
import { UserUncheckedCreateWithoutOwnerOfInputObjectSchema } from './UserUncheckedCreateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutOwnerOfInput>;
export const UserCreateOrConnectWithoutOwnerOfInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutOwnerOfInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutOwnerOfInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
