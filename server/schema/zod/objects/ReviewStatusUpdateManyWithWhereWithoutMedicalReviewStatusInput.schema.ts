/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInput>;
export const ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateManyWithoutMedicalReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
