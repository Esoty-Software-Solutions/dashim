import { z } from 'zod';
import { InstitutionMedicalCeneterServiceInstitutionIdMedicalCenterServiceIdCompoundUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceInstitutionIdMedicalCenterServiceIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      institutionId_medicalCenterServiceId: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceInstitutionIdMedicalCenterServiceIdCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema =
  Schema;
