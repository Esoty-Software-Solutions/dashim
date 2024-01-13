import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';
import { FaceCreateWithoutEntryRecordsInputObjectSchema } from './FaceCreateWithoutEntryRecordsInput.schema';
import { FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateOrConnectWithoutEntryRecordsInput> = z
  .object({
    where: z.lazy(() => FaceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FaceCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema),
    ]),
  })
  .strict();

export const FaceCreateOrConnectWithoutEntryRecordsInputObjectSchema = Schema;
