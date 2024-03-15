/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInput>;
export const InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        institutionId: z.string(),
        medicalServiceId: z.string(),
    })
    .strict() as SchemaType;
