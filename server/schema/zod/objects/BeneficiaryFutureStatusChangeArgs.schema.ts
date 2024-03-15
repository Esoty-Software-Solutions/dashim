/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeSelectObjectSchema } from './BeneficiaryFutureStatusChangeSelect.schema';
import { BeneficiaryFutureStatusChangeIncludeObjectSchema } from './BeneficiaryFutureStatusChangeInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeArgs>;
export const BeneficiaryFutureStatusChangeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema).optional(),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
