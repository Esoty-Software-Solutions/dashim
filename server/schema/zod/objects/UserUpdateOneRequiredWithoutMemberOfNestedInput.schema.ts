/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutMemberOfInputObjectSchema } from './UserCreateWithoutMemberOfInput.schema';
import { UserUncheckedCreateWithoutMemberOfInputObjectSchema } from './UserUncheckedCreateWithoutMemberOfInput.schema';
import { UserCreateOrConnectWithoutMemberOfInputObjectSchema } from './UserCreateOrConnectWithoutMemberOfInput.schema';
import { UserUpsertWithoutMemberOfInputObjectSchema } from './UserUpsertWithoutMemberOfInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutMemberOfInputObjectSchema } from './UserUpdateToOneWithWhereWithoutMemberOfInput.schema';
import { UserUpdateWithoutMemberOfInputObjectSchema } from './UserUpdateWithoutMemberOfInput.schema';
import { UserUncheckedUpdateWithoutMemberOfInputObjectSchema } from './UserUncheckedUpdateWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutMemberOfNestedInput>;
export const UserUpdateOneRequiredWithoutMemberOfNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutMemberOfInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutMemberOfInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMemberOfInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutMemberOfInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutMemberOfInputObjectSchema),
                z.lazy(() => UserUpdateWithoutMemberOfInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutMemberOfInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
