import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUpsertWithWhereUniqueWithoutEntryRecordInput.schema';
import { BeneficiaryServiceCreateManyEntryRecordInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyEntryRecordInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUpdateManyWithWhereWithoutEntryRecordInput.schema';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithoutEntryRecordNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryServiceCreateManyEntryRecordInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
          z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema =
  Schema;
