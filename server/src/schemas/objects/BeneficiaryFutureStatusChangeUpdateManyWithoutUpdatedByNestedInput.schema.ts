import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelope.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema,
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
              BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
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

export const BeneficiaryFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema =
  Schema;
