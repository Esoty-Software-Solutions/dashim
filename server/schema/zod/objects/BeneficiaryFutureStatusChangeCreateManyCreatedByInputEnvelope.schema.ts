/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateManyCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelope>;
export const BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateManyCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeCreateManyCreatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
