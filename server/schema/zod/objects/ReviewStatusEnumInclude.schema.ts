/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusInputSchema } from '../input/ReviewStatusInput.schema';
import { ReviewStatusEnumCountOutputTypeArgsObjectSchema } from './ReviewStatusEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumInclude>;
export const ReviewStatusEnumIncludeObjectSchema: SchemaType = z
    .object({
        transactionBeneficiaryServices: z
            .union([z.boolean(), z.lazy(() => ReviewStatusInputSchema.findMany)])
            .optional(),
        medicalBeneficiaryServices: z.union([z.boolean(), z.lazy(() => ReviewStatusInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ReviewStatusEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
