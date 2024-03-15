/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelope>;
export const BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
