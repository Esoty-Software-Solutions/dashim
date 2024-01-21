import { z } from 'zod';
import { InsurancePolicyInstitutionIdNameCompoundUniqueInputObjectSchema } from './InsurancePolicyInstitutionIdNameCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    institutionId_name: z
      .lazy(
        () => InsurancePolicyInstitutionIdNameCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyWhereUniqueInputObjectSchema = Schema;
