import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInput> =
  z
    .object({
      institutionId: z.string(),
      medicalServiceId: z.string(),
    })
    .strict();

export const InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInputObjectSchema =
  Schema;
