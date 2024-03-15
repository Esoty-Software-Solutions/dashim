/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput>;
export const MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        categoryId: z.string(),
        medicalCenterId: z.string(),
        medicalCenterCode: z.string(),
    })
    .strict() as SchemaType;
