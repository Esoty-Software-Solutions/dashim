import { z } from 'zod';
import { EntryRecordCreateWithoutFaceInputObjectSchema } from './EntryRecordCreateWithoutFaceInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceInput.schema';
import { EntryRecordCreateOrConnectWithoutFaceInputObjectSchema } from './EntryRecordCreateOrConnectWithoutFaceInput.schema';
import { EntryRecordCreateManyFaceInputEnvelopeObjectSchema } from './EntryRecordCreateManyFaceInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateNestedManyWithoutFaceInput> =
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
      createMany: z
        .lazy(() => EntryRecordCreateManyFaceInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateNestedManyWithoutFaceInputObjectSchema =
  Schema;
