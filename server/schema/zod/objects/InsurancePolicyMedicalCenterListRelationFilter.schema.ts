/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './InsurancePolicyMedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterListRelationFilter>;
export const InsurancePolicyMedicalCenterListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema).optional(),
        some: z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema).optional(),
        none: z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
