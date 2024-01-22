import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardCreateWithoutEntryRecordsInputObjectSchema } from './IDCardCreateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => IDCardCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(() => IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema),
      ]),
    })
    .strict();

export const IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema = Schema;
