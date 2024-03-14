/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateManyStatusSetByInputObjectSchema } from './BeneficiaryCreateManyStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateManyStatusSetByInputEnvelope>;
export const BeneficiaryCreateManyStatusSetByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryCreateManyStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryCreateManyStatusSetByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
