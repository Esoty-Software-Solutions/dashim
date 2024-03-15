/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutReviewStatusUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutReviewStatusUpdatesInput>;
export const UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutReviewStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
