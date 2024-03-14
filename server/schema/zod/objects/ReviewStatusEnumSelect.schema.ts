/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusInputSchema } from '../input/ReviewStatusInput.schema';
import { ReviewStatusEnumCountOutputTypeArgsObjectSchema } from './ReviewStatusEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumSelect>;
export const ReviewStatusEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        transactionBeneficiaryServices: z
            .union([z.boolean(), z.lazy(() => ReviewStatusInputSchema.findMany)])
            .optional(),
        medicalBeneficiaryServices: z.union([z.boolean(), z.lazy(() => ReviewStatusInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ReviewStatusEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
