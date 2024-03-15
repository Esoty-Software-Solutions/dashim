/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BeneficiaryServiceArgsObjectSchema } from './BeneficiaryServiceArgs.schema';
import { ReviewStatusEnumArgsObjectSchema } from './ReviewStatusEnumArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusSelect>;
export const ReviewStatusSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        createdById: z.boolean().optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        updatedById: z.boolean().optional(),
        beneficiaryService: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceArgsObjectSchema)]).optional(),
        transactionReviewStatus: z.union([z.boolean(), z.lazy(() => ReviewStatusEnumArgsObjectSchema)]).optional(),
        transactionReviewStatusId: z.boolean().optional(),
        medicalReviewStatus: z.union([z.boolean(), z.lazy(() => ReviewStatusEnumArgsObjectSchema)]).optional(),
        medicalReviewStatusId: z.boolean().optional(),
    })
    .strict() as SchemaType;
