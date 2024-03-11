/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCountOutputTypeSelectObjectSchema } from './BeneficiaryCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCountOutputTypeArgs>;
export const BeneficiaryCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
