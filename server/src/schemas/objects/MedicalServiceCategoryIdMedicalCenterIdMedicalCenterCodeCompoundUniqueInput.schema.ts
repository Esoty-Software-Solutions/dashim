import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput> =
  z
    .object({
      categoryId: z.string(),
      medicalCenterId: z.string(),
      medicalCenterCode: z.string(),
    })
    .strict();

export const MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema =
  Schema;
