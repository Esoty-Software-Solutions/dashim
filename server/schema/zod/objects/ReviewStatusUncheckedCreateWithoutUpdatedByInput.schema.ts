/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUncheckedCreateWithoutUpdatedByInput>;
export const ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        createdById: z.string(),
        transactionReviewStatusId: z.string(),
        medicalReviewStatusId: z.string(),
        beneficiaryService: z
            .lazy(() => BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
