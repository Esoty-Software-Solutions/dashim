import { z } from 'zod';
import { EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutFingerprintBiometricInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutFingerprintBiometricInput.schema';
import { EntryRecordCreateManyFingerprintBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyFingerprintBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutFingerprintBiometricInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutFingerprintBiometricInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithoutFingerprintBiometricNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpsertWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            EntryRecordCreateManyFingerprintBiometricInputEnvelopeObjectSchema,
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
              EntryRecordUpdateWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateManyWithWhereWithoutFingerprintBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateManyWithWhereWithoutFingerprintBiometricInputObjectSchema,
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

export const EntryRecordUpdateManyWithoutFingerprintBiometricNestedInputObjectSchema =
  Schema;
