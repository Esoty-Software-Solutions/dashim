import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { SubscriberGroupRelationFilterObjectSchema } from './SubscriberGroupRelationFilter.schema';
import { SubscriberGroupWhereInputObjectSchema } from './SubscriberGroupWhereInput.schema';
import { FingerprintRelationFilterObjectSchema } from './FingerprintRelationFilter.schema';
import { FingerprintWhereInputObjectSchema } from './FingerprintWhereInput.schema';
import { IDCardRelationFilterObjectSchema } from './IDCardRelationFilter.schema';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';
import { FaceRelationFilterObjectSchema } from './FaceRelationFilter.schema';
import { FaceWhereInputObjectSchema } from './FaceWhereInput.schema';
import { VoiceRelationFilterObjectSchema } from './VoiceRelationFilter.schema';
import { VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema';
import { PatientServiceListRelationFilterObjectSchema } from './PatientServiceListRelationFilter.schema';
import { PatientExaminationRelationFilterObjectSchema } from './PatientExaminationRelationFilter.schema';
import { PatientExaminationWhereInputObjectSchema } from './PatientExaminationWhereInput.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EntryRecordWhereInputObjectSchema),
        z.lazy(() => EntryRecordWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EntryRecordWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EntryRecordWhereInputObjectSchema),
        z.lazy(() => EntryRecordWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    subscriberGroupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fingerprintId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    idCardId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    faceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    voiceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isValidated: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isManuallyInserted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    medicalCenterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subscriberGroup: z
      .union([
        z.lazy(() => SubscriberGroupRelationFilterObjectSchema),
        z.lazy(() => SubscriberGroupWhereInputObjectSchema),
      ])
      .optional(),
    fingerprintBiometric: z
      .union([
        z.lazy(() => FingerprintRelationFilterObjectSchema),
        z.lazy(() => FingerprintWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    idCard: z
      .union([
        z.lazy(() => IDCardRelationFilterObjectSchema),
        z.lazy(() => IDCardWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    face: z
      .union([
        z.lazy(() => FaceRelationFilterObjectSchema),
        z.lazy(() => FaceWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    voice: z
      .union([
        z.lazy(() => VoiceRelationFilterObjectSchema),
        z.lazy(() => VoiceWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    patientServices: z
      .lazy(() => PatientServiceListRelationFilterObjectSchema)
      .optional(),
    patientExamination: z
      .union([
        z.lazy(() => PatientExaminationRelationFilterObjectSchema),
        z.lazy(() => PatientExaminationWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    medicalCenter: z
      .union([
        z.lazy(() => MedicalCenterRelationFilterObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EntryRecordWhereInputObjectSchema = Schema;
