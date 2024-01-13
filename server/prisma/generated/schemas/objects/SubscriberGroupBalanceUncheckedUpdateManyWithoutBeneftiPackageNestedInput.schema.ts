import { z } from 'zod';
import { SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema } from './SubscriberGroupBalanceCreateManyBeneftiPackageInputEnvelope.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUpdateManyWithWhereWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceScalarWhereInputObjectSchema } from './SubscriberGroupBalanceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUncheckedUpdateManyWithoutBeneftiPackageNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupBalanceUncheckedUpdateManyWithoutBeneftiPackageNestedInputObjectSchema =
  Schema;
