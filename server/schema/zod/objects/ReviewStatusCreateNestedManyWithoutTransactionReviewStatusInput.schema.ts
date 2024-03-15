/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusCreateManyTransactionReviewStatusInputEnvelopeObjectSchema } from './ReviewStatusCreateManyTransactionReviewStatusInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInput>;
export const ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema).array(),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => ReviewStatusCreateManyTransactionReviewStatusInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
