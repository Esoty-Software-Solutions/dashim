/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateManyUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateManyUpdatedByInputEnvelope>;
export const BeneficiaryServiceCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryServiceCreateManyUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceCreateManyUpdatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
