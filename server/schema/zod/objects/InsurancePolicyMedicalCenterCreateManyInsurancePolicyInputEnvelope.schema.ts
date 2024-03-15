/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelope>;
export const InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
