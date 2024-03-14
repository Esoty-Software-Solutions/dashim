/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterSelectObjectSchema } from './InsurancePolicyMedicalCenterSelect.schema';
import { InsurancePolicyMedicalCenterIncludeObjectSchema } from './InsurancePolicyMedicalCenterInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterArgs>;
export const InsurancePolicyMedicalCenterArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema).optional(),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
