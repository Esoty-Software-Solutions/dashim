/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateManyUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelope>;
export const BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateManyUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeCreateManyUpdatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
