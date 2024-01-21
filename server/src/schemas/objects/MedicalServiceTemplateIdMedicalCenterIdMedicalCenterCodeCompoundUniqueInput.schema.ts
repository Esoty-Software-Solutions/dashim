import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput> =
  z
    .object({
      templateId: z.string(),
      medicalCenterId: z.string(),
      medicalCenterCode: z.string(),
    })
    .strict();

export const MedicalServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema =
  Schema;
