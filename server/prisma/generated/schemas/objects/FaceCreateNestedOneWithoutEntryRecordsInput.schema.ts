import { z } from 'zod';
import { FaceCreateWithoutEntryRecordsInputObjectSchema } from './FaceCreateWithoutEntryRecordsInput.schema';
import { FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceUncheckedCreateWithoutEntryRecordsInput.schema';
import { FaceCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FaceCreateOrConnectWithoutEntryRecordsInput.schema';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateNestedOneWithoutEntryRecordsInput> = z
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
    connect: z.lazy(() => FaceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const FaceCreateNestedOneWithoutEntryRecordsInputObjectSchema = Schema;
