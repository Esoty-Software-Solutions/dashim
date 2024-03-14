/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewStatusUpdatesInput>;
export const UserUpdateToOneWithWhereWithoutReviewStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutReviewStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
