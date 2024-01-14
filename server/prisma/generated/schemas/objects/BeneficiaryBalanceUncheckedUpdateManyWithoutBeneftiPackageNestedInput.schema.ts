import { z } from 'zod';
import { BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema } from './BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelope.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceScalarWhereInputObjectSchema } from './BeneficiaryBalanceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUncheckedUpdateManyWithoutBeneftiPackageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema),
          z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryBalanceUncheckedUpdateManyWithoutBeneftiPackageNestedInputObjectSchema =
  Schema;
