import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereInputObjectSchema } from './InsurancePolicyMedicalCentersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => InsurancePolicyMedicalCentersWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => InsurancePolicyMedicalCentersWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => InsurancePolicyMedicalCentersWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCentersListRelationFilterObjectSchema =
  Schema;
