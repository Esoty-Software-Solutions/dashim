import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutIdCardInputObjectSchema } from './EntryRecordUpdateWithoutIdCardInput.schema';
import { EntryRecordUncheckedUpdateWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutIdCardInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutIdCardInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedUpdateWithoutIdCardInputObjectSchema),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutIdCardInputObjectSchema =
  Schema;
