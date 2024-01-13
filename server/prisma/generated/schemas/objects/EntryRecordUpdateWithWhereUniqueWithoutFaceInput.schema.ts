import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutFaceInputObjectSchema } from './EntryRecordUpdateWithoutFaceInput.schema';
import { EntryRecordUncheckedUpdateWithoutFaceInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutFaceInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutFaceInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedUpdateWithoutFaceInputObjectSchema),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutFaceInputObjectSchema =
  Schema;
