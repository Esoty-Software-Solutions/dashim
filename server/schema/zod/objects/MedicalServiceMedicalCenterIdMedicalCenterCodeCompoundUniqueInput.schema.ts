/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput>;
export const MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        medicalCenterId: z.string(),
        medicalCenterCode: z.string(),
    })
    .strict() as SchemaType;
