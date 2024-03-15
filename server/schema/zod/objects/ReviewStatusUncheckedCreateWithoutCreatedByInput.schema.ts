/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUncheckedCreateWithoutCreatedByInput>;
export const ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        updatedById: z.union([z.string(), z.null()]).optional().nullable(),
        transactionReviewStatusId: z.string(),
        medicalReviewStatusId: z.string(),
        beneficiaryService: z
            .lazy(() => BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
