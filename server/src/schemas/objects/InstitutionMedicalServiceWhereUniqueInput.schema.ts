import { z } from 'zod';
import { InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInputObjectSchema } from './InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    institutionId_medicalServiceId: z
      .lazy(
        () =>
          InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InstitutionMedicalServiceWhereUniqueInputObjectSchema = Schema;
