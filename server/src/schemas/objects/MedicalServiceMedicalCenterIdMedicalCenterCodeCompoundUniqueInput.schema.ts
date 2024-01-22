import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput> =
  z
    .object({
      medicalCenterId: z.string(),
      medicalCenterCode: z.string(),
    })
    .strict();

export const MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema =
  Schema;
