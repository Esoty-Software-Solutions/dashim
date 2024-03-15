/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelope>;
export const BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
