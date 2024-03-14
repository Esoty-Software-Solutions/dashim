/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceSelectObjectSchema } from './BeneficiaryServiceSelect.schema';
import { BeneficiaryServiceIncludeObjectSchema } from './BeneficiaryServiceInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceArgs>;
export const BeneficiaryServiceArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryServiceSelectObjectSchema).optional(),
        include: z.lazy(() => BeneficiaryServiceIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
