import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelopeObjectSchema =
  Schema;
