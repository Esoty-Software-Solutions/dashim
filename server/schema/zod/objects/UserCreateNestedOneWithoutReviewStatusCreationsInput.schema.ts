/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutReviewStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutReviewStatusCreationsInput>;
export const UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutReviewStatusCreationsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewStatusCreationsInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
