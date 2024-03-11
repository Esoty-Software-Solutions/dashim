import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './InsurancePolicyMedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCenterListRelationFilterObjectSchema =
  Schema;
