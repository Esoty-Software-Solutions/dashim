import { z } from 'zod';
import { MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';
import { MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';

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
    categoryId_medicalCenterId_medicalCenterCode: z
      .lazy(
        () =>
          MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalServiceWhereUniqueInputObjectSchema = Schema;
