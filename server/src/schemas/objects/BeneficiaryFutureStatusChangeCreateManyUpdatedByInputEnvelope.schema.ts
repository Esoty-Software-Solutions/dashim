import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateManyUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyUpdatedByInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateManyUpdatedByInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema =
  Schema;
