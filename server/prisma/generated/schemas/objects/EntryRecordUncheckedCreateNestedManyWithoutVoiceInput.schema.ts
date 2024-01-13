import { z } from 'zod';
import { EntryRecordCreateWithoutVoiceInputObjectSchema } from './EntryRecordCreateWithoutVoiceInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceInput.schema';
import { EntryRecordCreateOrConnectWithoutVoiceInputObjectSchema } from './EntryRecordCreateOrConnectWithoutVoiceInput.schema';
import { EntryRecordCreateManyVoiceInputEnvelopeObjectSchema } from './EntryRecordCreateManyVoiceInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateNestedManyWithoutVoiceInput> =
  z
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
      createMany: z
        .lazy(() => EntryRecordCreateManyVoiceInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateNestedManyWithoutVoiceInputObjectSchema =
  Schema;
