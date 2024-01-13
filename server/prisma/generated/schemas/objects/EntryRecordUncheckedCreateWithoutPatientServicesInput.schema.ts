import { z } from 'zod';
import { PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateWithoutPatientServicesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      subscriberGroupId: z.string(),
      fingerprintId: z.string().optional().nullable(),
      idCardId: z.string().optional().nullable(),
      faceId: z.string().optional().nullable(),
      voiceId: z.string().optional().nullable(),
      isValidated: z.boolean(),
      isManuallyInserted: z.boolean().optional(),
      medicalCenterId: z.string(),
      patientExamination: z
        .lazy(
          () =>
            PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema =
  Schema;
