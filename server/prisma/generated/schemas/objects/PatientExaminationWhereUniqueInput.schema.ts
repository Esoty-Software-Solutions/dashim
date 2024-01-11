import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    entryRecordId: z.string().optional(),
  })
  .strict();

export const PatientExaminationWhereUniqueInputObjectSchema = Schema;
