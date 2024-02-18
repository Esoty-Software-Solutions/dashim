import { z } from 'zod';
import { EntryRecordCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutUpdatedByInput.schema';
import { EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateOrConnectWithoutUpdatedByInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { EntryRecordCreateManyUpdatedByInputEnvelopeObjectSchema } from './EntryRecordCreateManyUpdatedByInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithoutUpdatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutUpdatedByInputObjectSchema),
          z
            .lazy(() => EntryRecordCreateWithoutUpdatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyUpdatedByInputEnvelopeObjectSchema)
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
              EntryRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
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

export const EntryRecordUpdateManyWithoutUpdatedByNestedInputObjectSchema =
  Schema;
