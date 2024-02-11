import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema =
  Schema;
