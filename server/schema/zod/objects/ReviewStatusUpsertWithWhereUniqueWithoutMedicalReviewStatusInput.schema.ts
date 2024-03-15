/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpsertWithWhereUniqueWithoutMedicalReviewStatusInput>;
export const ReviewStatusUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutMedicalReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
