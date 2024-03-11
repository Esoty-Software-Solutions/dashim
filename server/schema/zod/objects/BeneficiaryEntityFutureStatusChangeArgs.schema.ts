/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeSelectObjectSchema } from './BeneficiaryEntityFutureStatusChangeSelect.schema';
import { BeneficiaryEntityFutureStatusChangeIncludeObjectSchema } from './BeneficiaryEntityFutureStatusChangeInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeArgs>;
export const BeneficiaryEntityFutureStatusChangeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema).optional(),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
