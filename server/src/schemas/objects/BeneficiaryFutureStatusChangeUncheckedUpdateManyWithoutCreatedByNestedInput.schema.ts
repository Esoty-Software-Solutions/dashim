import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelope.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(
            () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(
            () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(
            () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(
            () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema =
  Schema;
