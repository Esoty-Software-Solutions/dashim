import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => InstitutionMedicalCeneterServiceWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => InstitutionMedicalCeneterServiceWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => InstitutionMedicalCeneterServiceWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceListRelationFilterObjectSchema =
  Schema;
