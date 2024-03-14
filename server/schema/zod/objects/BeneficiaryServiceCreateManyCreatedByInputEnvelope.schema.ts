/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateManyCreatedByInputObjectSchema } from './BeneficiaryServiceCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateManyCreatedByInputEnvelope>;
export const BeneficiaryServiceCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryServiceCreateManyCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceCreateManyCreatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
