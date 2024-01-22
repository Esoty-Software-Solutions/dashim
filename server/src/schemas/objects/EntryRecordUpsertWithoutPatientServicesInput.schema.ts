import { z } from 'zod';
import { EntryRecordUpdateWithoutPatientServicesInputObjectSchema } from './EntryRecordUpdateWithoutPatientServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutPatientServicesInput.schema';
import { EntryRecordCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateWithoutPatientServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithoutPatientServicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => EntryRecordUpdateWithoutPatientServicesInputObjectSchema),
      z.lazy(
        () => EntryRecordUncheckedUpdateWithoutPatientServicesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => EntryRecordCreateWithoutPatientServicesInputObjectSchema),
      z.lazy(
        () => EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const EntryRecordUpsertWithoutPatientServicesInputObjectSchema = Schema;
