import { z } from 'zod';
import { IDCardCreateWithoutEntryRecordsInputObjectSchema } from './IDCardCreateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedCreateWithoutEntryRecordsInput.schema';
import { IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './IDCardCreateOrConnectWithoutEntryRecordsInput.schema';
import { IDCardUpsertWithoutEntryRecordsInputObjectSchema } from './IDCardUpsertWithoutEntryRecordsInput.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUpdateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpdateOneWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => IDCardCreateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () => IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => IDCardUpsertWithoutEntryRecordsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => IDCardWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => IDCardUpdateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () => IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const IDCardUpdateOneWithoutEntryRecordsNestedInputObjectSchema = Schema;
