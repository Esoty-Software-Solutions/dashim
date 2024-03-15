/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCountOutputTypeSelectObjectSchema } from './InsurancePolicyCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCountOutputTypeArgs>;
export const InsurancePolicyCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => InsurancePolicyCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
