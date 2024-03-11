import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelope.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema =
  Schema;
