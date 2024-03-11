/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelope>;
export const BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
