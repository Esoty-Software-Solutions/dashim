/* eslint-disable */
import { z } from 'zod';
import { BeneficiarySelectObjectSchema } from './BeneficiarySelect.schema';
import { BeneficiaryIncludeObjectSchema } from './BeneficiaryInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryArgs>;
export const BeneficiaryArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiarySelectObjectSchema).optional(),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
