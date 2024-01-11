import { z } from 'zod';
import { EntryRecordUpdateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUpdateWithoutPatientExaminationInput.schema';
import { EntryRecordUncheckedUpdateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutPatientExaminationInput.schema';
import { EntryRecordCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateWithoutPatientExaminationInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithoutPatientExaminationInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => EntryRecordUpdateWithoutPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutPatientExaminationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => EntryRecordCreateWithoutPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithoutPatientExaminationInputObjectSchema =
  Schema;
