/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutReviewStatusUpdatesInput>;
export const UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutReviewStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
