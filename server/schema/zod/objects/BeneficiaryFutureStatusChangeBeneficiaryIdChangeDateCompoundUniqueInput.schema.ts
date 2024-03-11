/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInput>;
export const BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        beneficiaryId: z.string(),
        changeDate: z.union([z.date(), z.string().datetime()]),
    })
    .strict() as SchemaType;
