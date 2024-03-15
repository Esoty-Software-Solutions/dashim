/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInput>;
export const BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        beneficiaryId: z.string(),
        beneftiPackageId: z.string(),
    })
    .strict() as SchemaType;
