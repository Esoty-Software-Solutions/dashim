import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubscriberGroupOrderByWithRelationInputObjectSchema } from './SubscriberGroupOrderByWithRelationInput.schema';
import { FingerprintOrderByWithRelationInputObjectSchema } from './FingerprintOrderByWithRelationInput.schema';
import { IDCardOrderByWithRelationInputObjectSchema } from './IDCardOrderByWithRelationInput.schema';
import { FaceOrderByWithRelationInputObjectSchema } from './FaceOrderByWithRelationInput.schema';
import { VoiceOrderByWithRelationInputObjectSchema } from './VoiceOrderByWithRelationInput.schema';
import { PatientServiceOrderByRelationAggregateInputObjectSchema } from './PatientServiceOrderByRelationAggregateInput.schema';
import { PatientExaminationOrderByWithRelationInputObjectSchema } from './PatientExaminationOrderByWithRelationInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    fingerprintId: z.lazy(() => SortOrderSchema).optional(),
    isValidated: z.lazy(() => SortOrderSchema).optional(),
    isManuallyInserted: z.lazy(() => SortOrderSchema).optional(),
    idCardId: z.lazy(() => SortOrderSchema).optional(),
    faceId: z.lazy(() => SortOrderSchema).optional(),
    voiceId: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    subscriberGroup: z
      .lazy(() => SubscriberGroupOrderByWithRelationInputObjectSchema)
      .optional(),
    fingerprintBiometric: z
      .lazy(() => FingerprintOrderByWithRelationInputObjectSchema)
      .optional(),
    idCard: z.lazy(() => IDCardOrderByWithRelationInputObjectSchema).optional(),
    face: z.lazy(() => FaceOrderByWithRelationInputObjectSchema).optional(),
    voice: z.lazy(() => VoiceOrderByWithRelationInputObjectSchema).optional(),
    patientServices: z
      .lazy(() => PatientServiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    patientExamination: z
      .lazy(() => PatientExaminationOrderByWithRelationInputObjectSchema)
      .optional(),
    medicalCenter: z
      .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const EntryRecordOrderByWithRelationInputObjectSchema = Schema;
