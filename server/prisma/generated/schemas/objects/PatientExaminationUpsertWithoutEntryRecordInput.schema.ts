import { z } from 'zod';
import { PatientExaminationUpdateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUpdateWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutEntryRecordInput.schema';
import { PatientExaminationCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationCreateWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpsertWithoutEntryRecordInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => PatientExaminationUpdateWithoutEntryRecordInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => PatientExaminationCreateWithoutEntryRecordInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpsertWithoutEntryRecordInputObjectSchema =
  Schema;
