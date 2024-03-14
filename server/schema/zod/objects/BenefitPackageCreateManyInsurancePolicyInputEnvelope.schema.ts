/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateManyInsurancePolicyInputObjectSchema } from './BenefitPackageCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateManyInsurancePolicyInputEnvelope>;
export const BenefitPackageCreateManyInsurancePolicyInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BenefitPackageCreateManyInsurancePolicyInputObjectSchema),
            z.lazy(() => BenefitPackageCreateManyInsurancePolicyInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
