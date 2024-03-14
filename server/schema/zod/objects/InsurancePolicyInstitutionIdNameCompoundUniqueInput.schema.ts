/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyInstitutionIdNameCompoundUniqueInput>;
export const InsurancePolicyInstitutionIdNameCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        institutionId: z.string(),
        name: z.string(),
    })
    .strict() as SchemaType;
