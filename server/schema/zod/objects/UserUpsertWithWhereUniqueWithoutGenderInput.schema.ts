/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGenderInputObjectSchema } from './UserUpdateWithoutGenderInput.schema';
import { UserUncheckedUpdateWithoutGenderInputObjectSchema } from './UserUncheckedUpdateWithoutGenderInput.schema';
import { UserCreateWithoutGenderInputObjectSchema } from './UserCreateWithoutGenderInput.schema';
import { UserUncheckedCreateWithoutGenderInputObjectSchema } from './UserUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutGenderInput>;
export const UserUpsertWithWhereUniqueWithoutGenderInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => UserUpdateWithoutGenderInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutGenderInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutGenderInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutGenderInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
