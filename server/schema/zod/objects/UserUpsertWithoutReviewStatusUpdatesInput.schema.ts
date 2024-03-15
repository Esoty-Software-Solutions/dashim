/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutReviewStatusUpdatesInput>;
export const UserUpsertWithoutReviewStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutReviewStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutReviewStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
