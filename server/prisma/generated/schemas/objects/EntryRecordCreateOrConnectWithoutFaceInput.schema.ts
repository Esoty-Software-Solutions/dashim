import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutFaceInputObjectSchema } from './EntryRecordCreateWithoutFaceInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutFaceInput> = z
  .object({
    where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EntryRecordCreateWithoutFaceInputObjectSchema),
      z.lazy(() => EntryRecordUncheckedCreateWithoutFaceInputObjectSchema),
    ]),
  })
  .strict();

export const EntryRecordCreateOrConnectWithoutFaceInputObjectSchema = Schema;
