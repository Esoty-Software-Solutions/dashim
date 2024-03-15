/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusUpdatesInput.schema';
import { BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateNestedOneWithoutReviewStatusInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateWithoutCreatedByInput>;
export const ReviewStatusCreateWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        UpdatedBy: z.lazy(() => UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema).optional(),
        beneficiaryService: z
            .lazy(() => BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema)
            .optional(),
        transactionReviewStatus: z.lazy(
            () => ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema,
        ),
        medicalReviewStatus: z.lazy(
            () => ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
    })
    .strict() as SchemaType;
