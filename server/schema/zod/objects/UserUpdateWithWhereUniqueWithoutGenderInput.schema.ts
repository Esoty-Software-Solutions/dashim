/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGenderInputObjectSchema } from './UserUpdateWithoutGenderInput.schema';
import { UserUncheckedUpdateWithoutGenderInputObjectSchema } from './UserUncheckedUpdateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutGenderInput>;
export const UserUpdateWithWhereUniqueWithoutGenderInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => UserUpdateWithoutGenderInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutGenderInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
