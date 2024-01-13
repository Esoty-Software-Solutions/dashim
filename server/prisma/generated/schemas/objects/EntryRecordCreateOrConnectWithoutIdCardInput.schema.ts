import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutIdCardInputObjectSchema } from './EntryRecordCreateWithoutIdCardInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutIdCardInput> = z
  .object({
    where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EntryRecordCreateWithoutIdCardInputObjectSchema),
      z.lazy(() => EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema),
    ]),
  })
  .strict();

export const EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema = Schema;
