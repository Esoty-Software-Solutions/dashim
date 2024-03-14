/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput>;
export const ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        medicalBeneficiaryServices: z
            .lazy(() => ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
