/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateManyStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateManyStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateManyStatusSetByInputEnvelope>;
export const BeneficiaryEntityCreateManyStatusSetByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryEntityCreateManyStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityCreateManyStatusSetByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
