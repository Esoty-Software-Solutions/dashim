import { z } from 'zod';
import { FaceCreateWithoutEntryRecordsInputObjectSchema } from './FaceCreateWithoutEntryRecordsInput.schema';
import { FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceUncheckedCreateWithoutEntryRecordsInput.schema';
import { FaceCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FaceCreateOrConnectWithoutEntryRecordsInput.schema';
import { FaceUpsertWithoutEntryRecordsInputObjectSchema } from './FaceUpsertWithoutEntryRecordsInput.schema';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';
import { FaceUpdateWithoutEntryRecordsInputObjectSchema } from './FaceUpdateWithoutEntryRecordsInput.schema';
import { FaceUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceUpdateOneWithoutEntryRecordsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FaceCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(() => FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FaceCreateOrConnectWithoutEntryRecordsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => FaceUpsertWithoutEntryRecordsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => FaceWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => FaceUpdateWithoutEntryRecordsInputObjectSchema),
        z.lazy(() => FaceUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const FaceUpdateOneWithoutEntryRecordsNestedInputObjectSchema = Schema;
