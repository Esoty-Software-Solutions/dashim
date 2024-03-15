/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BeneficiaryServiceArgsObjectSchema } from './BeneficiaryServiceArgs.schema';
import { ReviewStatusEnumArgsObjectSchema } from './ReviewStatusEnumArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusInclude>;
export const ReviewStatusIncludeObjectSchema: SchemaType = z
    .object({
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        beneficiaryService: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceArgsObjectSchema)]).optional(),
        transactionReviewStatus: z.union([z.boolean(), z.lazy(() => ReviewStatusEnumArgsObjectSchema)]).optional(),
        medicalReviewStatus: z.union([z.boolean(), z.lazy(() => ReviewStatusEnumArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
