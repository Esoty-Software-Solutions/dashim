import { z } from 'zod';
import { EntryRecordCreateWithoutVoiceInputObjectSchema } from './EntryRecordCreateWithoutVoiceInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceInput.schema';
import { EntryRecordCreateOrConnectWithoutVoiceInputObjectSchema } from './EntryRecordCreateOrConnectWithoutVoiceInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutVoiceInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutVoiceInput.schema';
import { EntryRecordCreateManyVoiceInputEnvelopeObjectSchema } from './EntryRecordCreateManyVoiceInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutVoiceInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutVoiceInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutVoiceInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutVoiceInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithoutVoiceNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EntryRecordCreateWithoutVoiceInputObjectSchema),
        z.lazy(() => EntryRecordCreateWithoutVoiceInputObjectSchema).array(),
        z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema),
        z
          .lazy(() => EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EntryRecordCreateOrConnectWithoutVoiceInputObjectSchema),
        z
          .lazy(() => EntryRecordCreateOrConnectWithoutVoiceInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => EntryRecordUpsertWithWhereUniqueWithoutVoiceInputObjectSchema,
        ),
        z
          .lazy(
            () => EntryRecordUpsertWithWhereUniqueWithoutVoiceInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EntryRecordCreateManyVoiceInputEnvelopeObjectSchema)
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
          () => EntryRecordUpdateWithWhereUniqueWithoutVoiceInputObjectSchema,
        ),
        z
          .lazy(
            () => EntryRecordUpdateWithWhereUniqueWithoutVoiceInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => EntryRecordUpdateManyWithWhereWithoutVoiceInputObjectSchema,
        ),
        z
          .lazy(
            () => EntryRecordUpdateManyWithWhereWithoutVoiceInputObjectSchema,
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

export const EntryRecordUpdateManyWithoutVoiceNestedInputObjectSchema = Schema;
