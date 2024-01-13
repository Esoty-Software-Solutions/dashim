import { z } from 'zod';
import { EntryRecordCreateWithoutIdCardInputObjectSchema } from './EntryRecordCreateWithoutIdCardInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardInput.schema';
import { EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema } from './EntryRecordCreateOrConnectWithoutIdCardInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutIdCardInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutIdCardInput.schema';
import { EntryRecordCreateManyIdCardInputEnvelopeObjectSchema } from './EntryRecordCreateManyIdCardInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutIdCardInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutIdCardInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutIdCardInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutIdCardInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedUpdateManyWithoutIdCardNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutIdCardInputObjectSchema),
          z.lazy(() => EntryRecordCreateWithoutIdCardInputObjectSchema).array(),
          z.lazy(
            () => EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpsertWithWhereUniqueWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutIdCardInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyIdCardInputEnvelopeObjectSchema)
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
              EntryRecordUpdateWithWhereUniqueWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutIdCardInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => EntryRecordUpdateManyWithWhereWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateManyWithWhereWithoutIdCardInputObjectSchema,
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

export const EntryRecordUncheckedUpdateManyWithoutIdCardNestedInputObjectSchema =
  Schema;
