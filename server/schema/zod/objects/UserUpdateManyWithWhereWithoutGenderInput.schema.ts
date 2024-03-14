/* eslint-disable */
import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutGenderInputObjectSchema } from './UserUncheckedUpdateManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateManyWithWhereWithoutGenderInput>;
export const UserUpdateManyWithWhereWithoutGenderInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => UserUpdateManyMutationInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateManyWithoutGenderInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
