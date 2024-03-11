import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelopeObjectSchema =
  Schema;
