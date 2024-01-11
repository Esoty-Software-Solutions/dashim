import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutIdCardInputObjectSchema } from './EntryRecordUpdateWithoutIdCardInput.schema';
import { EntryRecordUncheckedUpdateWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutIdCardInput.schema';
import { EntryRecordCreateWithoutIdCardInputObjectSchema } from './EntryRecordCreateWithoutIdCardInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutIdCardInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutIdCardInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedUpdateWithoutIdCardInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutIdCardInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutIdCardInputObjectSchema =
  Schema;
