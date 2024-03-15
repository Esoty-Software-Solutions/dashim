/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutOwnerOfInputObjectSchema } from './UserCreateWithoutOwnerOfInput.schema';
import { UserUncheckedCreateWithoutOwnerOfInputObjectSchema } from './UserUncheckedCreateWithoutOwnerOfInput.schema';
import { UserCreateOrConnectWithoutOwnerOfInputObjectSchema } from './UserCreateOrConnectWithoutOwnerOfInput.schema';
import { UserUpsertWithoutOwnerOfInputObjectSchema } from './UserUpsertWithoutOwnerOfInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOwnerOfInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOwnerOfInput.schema';
import { UserUpdateWithoutOwnerOfInputObjectSchema } from './UserUpdateWithoutOwnerOfInput.schema';
import { UserUncheckedUpdateWithoutOwnerOfInputObjectSchema } from './UserUncheckedUpdateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnerOfNestedInput>;
export const UserUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutOwnerOfInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutOwnerOfInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnerOfInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutOwnerOfInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutOwnerOfInputObjectSchema),
                z.lazy(() => UserUpdateWithoutOwnerOfInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutOwnerOfInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
