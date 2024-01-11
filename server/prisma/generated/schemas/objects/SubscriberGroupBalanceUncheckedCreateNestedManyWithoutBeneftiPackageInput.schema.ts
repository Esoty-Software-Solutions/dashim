import { z } from 'zod';
import { SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema } from './SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelope.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInputObjectSchema =
  Schema;
