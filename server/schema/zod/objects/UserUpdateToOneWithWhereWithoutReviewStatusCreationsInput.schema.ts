/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUpdateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewStatusCreationsInput>;
export const UserUpdateToOneWithWhereWithoutReviewStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutReviewStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
