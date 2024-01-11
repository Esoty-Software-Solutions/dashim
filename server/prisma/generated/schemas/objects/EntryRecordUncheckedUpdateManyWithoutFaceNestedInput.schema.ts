import { z } from 'zod';
import { EntryRecordCreateWithoutFaceInputObjectSchema } from './EntryRecordCreateWithoutFaceInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceInput.schema';
import { EntryRecordCreateOrConnectWithoutFaceInputObjectSchema } from './EntryRecordCreateOrConnectWithoutFaceInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutFaceInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutFaceInput.schema';
import { EntryRecordCreateManyFaceInputEnvelopeObjectSchema } from './EntryRecordCreateManyFaceInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutFaceInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutFaceInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutFaceInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutFaceInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedUpdateManyWithoutFaceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutFaceInputObjectSchema),
          z.lazy(() => EntryRecordCreateWithoutFaceInputObjectSchema).array(),
          z.lazy(() => EntryRecordUncheckedCreateWithoutFaceInputObjectSchema),
          z
            .lazy(() => EntryRecordUncheckedCreateWithoutFaceInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => EntryRecordCreateOrConnectWithoutFaceInputObjectSchema),
          z
            .lazy(() => EntryRecordCreateOrConnectWithoutFaceInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => EntryRecordUpsertWithWhereUniqueWithoutFaceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutFaceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyFaceInputEnvelopeObjectSchema)
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
            () => EntryRecordUpdateWithWhereUniqueWithoutFaceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutFaceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => EntryRecordUpdateManyWithWhereWithoutFaceInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordUpdateManyWithWhereWithoutFaceInputObjectSchema,
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

export const EntryRecordUncheckedUpdateManyWithoutFaceNestedInputObjectSchema =
  Schema;
