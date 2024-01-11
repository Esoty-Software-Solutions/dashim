import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateWithoutFaceInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    subscriberGroupId: z.string(),
    fingerprintId: z.string(),
    isValidated: z.boolean(),
    isManuallyInserted: z.boolean().optional(),
    idCardId: z.string(),
    voiceId: z.string(),
    medicalCenterId: z.string(),
    patientServices: z
      .lazy(
        () =>
          PatientServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema,
      )
      .optional(),
    patientExamination: z
      .lazy(
        () =>
          PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EntryRecordUncheckedCreateWithoutFaceInputObjectSchema = Schema;
