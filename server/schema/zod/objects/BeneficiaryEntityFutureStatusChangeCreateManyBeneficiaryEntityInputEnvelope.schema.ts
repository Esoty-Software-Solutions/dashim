/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelope>;
export const BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
