/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusUpdatesInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateWithoutBeneficiaryServiceInput>;
export const ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        CreatedBy: z.lazy(() => UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema),
        UpdatedBy: z.lazy(() => UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema).optional(),
        transactionReviewStatus: z.lazy(
            () => ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema,
        ),
        medicalReviewStatus: z.lazy(
            () => ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
    })
    .strict() as SchemaType;
