import { z } from 'zod';
import { MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';
import { MedicalServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    medicalCenterId_medicalCenterCode: z
      .lazy(
        () =>
          MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema,
      )
      .optional(),
    templateId_medicalCenterId_medicalCenterCode: z
      .lazy(
        () =>
          MedicalServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalServiceWhereUniqueInputObjectSchema = Schema;
