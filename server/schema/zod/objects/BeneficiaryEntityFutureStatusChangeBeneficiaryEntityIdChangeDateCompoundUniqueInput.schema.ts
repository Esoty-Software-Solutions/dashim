/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInput>;
export const BeneficiaryEntityFutureStatusChangeBeneficiaryEntityIdChangeDateCompoundUniqueInputObjectSchema: SchemaType =
    z
        .object({
            beneficiaryEntityId: z.string(),
            changeDate: z.union([z.date(), z.string().datetime()]),
        })
        .strict() as SchemaType;
