import { z } from 'zod';
import { EntryRecordCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateWithoutFaceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutFaceBiometricInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutFaceBiometricInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutFaceBiometricInput.schema';
import { EntryRecordCreateManyFaceBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyFaceBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutFaceBiometricInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutFaceBiometricInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutFaceBiometricInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutFaceBiometricInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithoutFaceBiometricNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutFaceBiometricInputObjectSchema),
          z
            .lazy(() => EntryRecordCreateWithoutFaceBiometricInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpsertWithWhereUniqueWithoutFaceBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutFaceBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyFaceBiometricInputEnvelopeObjectSchema)
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
              EntryRecordUpdateWithWhereUniqueWithoutFaceBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutFaceBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateManyWithWhereWithoutFaceBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateManyWithWhereWithoutFaceBiometricInputObjectSchema,
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

export const EntryRecordUpdateManyWithoutFaceBiometricNestedInputObjectSchema =
  Schema;
