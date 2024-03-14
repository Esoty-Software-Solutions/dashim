/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateManyBeneficiaryInputEnvelope>;
export const BeneficiaryBalanceCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
