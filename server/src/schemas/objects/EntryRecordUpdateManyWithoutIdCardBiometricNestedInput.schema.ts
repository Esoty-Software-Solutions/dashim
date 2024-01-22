import { z } from 'zod';
import { EntryRecordCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutIdCardBiometricInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutIdCardBiometricInput.schema';
import { EntryRecordCreateManyIdCardBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyIdCardBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutIdCardBiometricInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithoutIdCardBiometricNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpsertWithWhereUniqueWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => EntryRecordCreateManyIdCardBiometricInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateManyWithWhereWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateManyWithWhereWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
          z.lazy(() => EntryRecordScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUpdateManyWithoutIdCardBiometricNestedInputObjectSchema =
  Schema;
