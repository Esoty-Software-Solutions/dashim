/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateManyBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelope>;
export const BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
