/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInput>;
export const BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        beneficiaryEntityId: z.string(),
        id: z.string(),
    })
    .strict() as SchemaType;
