import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateManyCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyCreatedByInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateManyCreatedByInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema =
  Schema;
