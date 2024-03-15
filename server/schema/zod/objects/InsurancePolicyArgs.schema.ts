/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicySelectObjectSchema } from './InsurancePolicySelect.schema';
import { InsurancePolicyIncludeObjectSchema } from './InsurancePolicyInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyArgs>;
export const InsurancePolicyArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => InsurancePolicySelectObjectSchema).optional(),
        include: z.lazy(() => InsurancePolicyIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
