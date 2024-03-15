/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput>;
export const ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        transactionBeneficiaryServices: z
            .lazy(() => ReviewStatusCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
