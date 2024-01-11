import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutEntryRecordsInput.schema';
import { FingerprintCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateNestedOneWithoutEntryRecordsInput.schema';
import { IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './IDCardCreateNestedOneWithoutEntryRecordsInput.schema';
import { FaceCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FaceCreateNestedOneWithoutEntryRecordsInput.schema';
import { VoiceCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './VoiceCreateNestedOneWithoutEntryRecordsInput.schema';
import { PatientServiceCreateNestedManyWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateNestedManyWithoutEntryRecordInput.schema';
import { MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateWithoutPatientExaminationInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      isValidated: z.boolean(),
      isManuallyInserted: z.boolean().optional(),
      subscriberGroup: z.lazy(
        () =>
          SubscriberGroupCreateNestedOneWithoutEntryRecordsInputObjectSchema,
      ),
      fingerprintBiometric: z
        .lazy(
          () => FingerprintCreateNestedOneWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      idCard: z
        .lazy(() => IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema)
        .optional(),
      face: z
        .lazy(() => FaceCreateNestedOneWithoutEntryRecordsInputObjectSchema)
        .optional(),
      voice: z
        .lazy(() => VoiceCreateNestedOneWithoutEntryRecordsInputObjectSchema)
        .optional(),
      patientServices: z
        .lazy(
          () =>
            PatientServiceCreateNestedManyWithoutEntryRecordInputObjectSchema,
        )
        .optional(),
      medicalCenter: z.lazy(
        () => MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema,
      ),
    })
    .strict();

export const EntryRecordCreateWithoutPatientExaminationInputObjectSchema =
  Schema;
