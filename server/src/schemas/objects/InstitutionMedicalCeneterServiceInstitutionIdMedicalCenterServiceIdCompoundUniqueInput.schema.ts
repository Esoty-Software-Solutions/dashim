import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceInstitutionIdMedicalCenterServiceIdCompoundUniqueInput> =
  z
    .object({
      institutionId: z.string(),
      medicalCenterServiceId: z.string(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceInstitutionIdMedicalCenterServiceIdCompoundUniqueInputObjectSchema =
  Schema;
