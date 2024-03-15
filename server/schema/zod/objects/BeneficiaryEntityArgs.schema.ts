/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntitySelectObjectSchema } from './BeneficiaryEntitySelect.schema';
import { BeneficiaryEntityIncludeObjectSchema } from './BeneficiaryEntityInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityArgs>;
export const BeneficiaryEntityArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema).optional(),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
