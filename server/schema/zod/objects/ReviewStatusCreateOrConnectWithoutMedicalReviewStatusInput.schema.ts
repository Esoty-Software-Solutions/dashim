/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInput>;
export const ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
