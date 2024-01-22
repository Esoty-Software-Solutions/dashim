import { z } from 'zod';
import { MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUpdateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MedicalCenterCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MedicalCenterUpsertWithoutEntryRecordsInputObjectSchema = Schema;
