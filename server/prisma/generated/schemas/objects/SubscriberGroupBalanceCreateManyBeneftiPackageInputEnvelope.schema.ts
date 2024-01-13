import { z } from 'zod';
import { SubscriberGroupBalanceCreateManyBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateManyBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => SubscriberGroupBalanceCreateManyBeneftiPackageInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              SubscriberGroupBalanceCreateManyBeneftiPackageInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema =
  Schema;
