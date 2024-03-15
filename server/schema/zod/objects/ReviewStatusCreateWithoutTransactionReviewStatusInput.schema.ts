/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusUpdatesInput.schema';
import { BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateNestedOneWithoutReviewStatusInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateWithoutTransactionReviewStatusInput>;
export const ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        CreatedBy: z.lazy(() => UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema),
        UpdatedBy: z.lazy(() => UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema).optional(),
        beneficiaryService: z
            .lazy(() => BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema)
            .optional(),
        medicalReviewStatus: z.lazy(
            () => ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
    })
    .strict() as SchemaType;
