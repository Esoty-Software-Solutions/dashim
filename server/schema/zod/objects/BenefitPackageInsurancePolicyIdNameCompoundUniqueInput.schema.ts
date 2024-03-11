/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageInsurancePolicyIdNameCompoundUniqueInput>;
export const BenefitPackageInsurancePolicyIdNameCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        insurancePolicyId: z.string(),
        name: z.string(),
    })
    .strict() as SchemaType;
