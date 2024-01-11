import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutFaceInputObjectSchema } from './EntryRecordUpdateWithoutFaceInput.schema';
import { EntryRecordUncheckedUpdateWithoutFaceInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutFaceInput.schema';
import { EntryRecordCreateWithoutFaceInputObjectSchema } from './EntryRecordCreateWithoutFaceInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutFaceInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutFaceInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedUpdateWithoutFaceInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutFaceInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedCreateWithoutFaceInputObjectSchema),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutFaceInputObjectSchema =
  Schema;
