/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateManyMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelope>;
export const InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterCreateManyMedicalCenterInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterCreateManyMedicalCenterInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
