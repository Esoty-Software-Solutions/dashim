/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateManyInstitutionInputObjectSchema } from './InsurancePolicyCreateManyInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateManyInstitutionInputEnvelope>;
export const InsurancePolicyCreateManyInstitutionInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => InsurancePolicyCreateManyInstitutionInputObjectSchema),
            z.lazy(() => InsurancePolicyCreateManyInstitutionInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
