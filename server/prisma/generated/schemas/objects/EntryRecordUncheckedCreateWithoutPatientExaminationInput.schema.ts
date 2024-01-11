import { z } from 'zod';
import { PatientServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedCreateNestedManyWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateWithoutPatientExaminationInput> =
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
      fingerprintId: z.string(),
      isValidated: z.boolean(),
      isManuallyInserted: z.boolean().optional(),
      idCardId: z.string(),
      faceId: z.string(),
      voiceId: z.string(),
      medicalCenterId: z.string(),
      patientServices: z
        .lazy(
          () =>
            PatientServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema =
  Schema;
