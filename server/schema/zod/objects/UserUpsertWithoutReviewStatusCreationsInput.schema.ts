/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUpdateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusCreationsInput.schema';
import { UserCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusCreationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutReviewStatusCreationsInput>;
export const UserUpsertWithoutReviewStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutReviewStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutReviewStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
