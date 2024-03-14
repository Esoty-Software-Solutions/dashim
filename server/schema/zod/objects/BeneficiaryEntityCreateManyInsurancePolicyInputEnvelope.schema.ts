/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateManyInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateManyInsurancePolicyInputEnvelope>;
export const BeneficiaryEntityCreateManyInsurancePolicyInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryEntityCreateManyInsurancePolicyInputObjectSchema),
            z.lazy(() => BeneficiaryEntityCreateManyInsurancePolicyInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
