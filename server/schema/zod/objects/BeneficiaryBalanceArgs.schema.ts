/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceSelectObjectSchema } from './BeneficiaryBalanceSelect.schema';
import { BeneficiaryBalanceIncludeObjectSchema } from './BeneficiaryBalanceInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceArgs>;
export const BeneficiaryBalanceArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryBalanceSelectObjectSchema).optional(),
        include: z.lazy(() => BeneficiaryBalanceIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
