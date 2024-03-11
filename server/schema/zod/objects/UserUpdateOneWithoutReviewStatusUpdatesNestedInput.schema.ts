/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutReviewStatusUpdatesInput.schema';
import { UserUpsertWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpsertWithoutReviewStatusUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReviewStatusUpdatesInput.schema';
import { UserUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutReviewStatusUpdatesNestedInput>;
export const UserUpdateOneWithoutReviewStatusUpdatesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutReviewStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutReviewStatusUpdatesInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutReviewStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUpdateWithoutReviewStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
