/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateManyMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateManyMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateManyMedicalServiceInputEnvelope>;
export const BeneficiaryServiceCreateManyMedicalServiceInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryServiceCreateManyMedicalServiceInputObjectSchema),
            z.lazy(() => BeneficiaryServiceCreateManyMedicalServiceInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
