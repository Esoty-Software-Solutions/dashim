import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema =
  Schema;
