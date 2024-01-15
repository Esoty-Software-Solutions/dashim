import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './BeneficiaryOrderByWithRelationInput.schema';
import { FingerprintBiometricOrderByWithRelationInputObjectSchema } from './FingerprintBiometricOrderByWithRelationInput.schema';
import { IDCardOrderByWithRelationInputObjectSchema } from './IDCardOrderByWithRelationInput.schema';
import { FaceBiometricOrderByWithRelationInputObjectSchema } from './FaceBiometricOrderByWithRelationInput.schema';
import { VoiceBiometricOrderByWithRelationInputObjectSchema } from './VoiceBiometricOrderByWithRelationInput.schema';
import { PatientServiceOrderByRelationAggregateInputObjectSchema } from './PatientServiceOrderByRelationAggregateInput.schema';
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
    beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
    fingerprintId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    idCardId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    faceId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    voiceId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    isValidated: z.lazy(() => SortOrderSchema).optional(),
    isManuallyInserted: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    beneficiary: z
      .lazy(() => BeneficiaryOrderByWithRelationInputObjectSchema)
      .optional(),
    fingerprintBiometric: z
      .lazy(() => FingerprintBiometricOrderByWithRelationInputObjectSchema)
      .optional(),
    idCardBiometric: z
      .lazy(() => IDCardOrderByWithRelationInputObjectSchema)
      .optional(),
    faceBiometric: z
      .lazy(() => FaceBiometricOrderByWithRelationInputObjectSchema)
      .optional(),
    voiceBiometric: z
      .lazy(() => VoiceBiometricOrderByWithRelationInputObjectSchema)
      .optional(),
    patientServices: z
      .lazy(() => PatientServiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    medicalCenter: z
      .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const EntryRecordOrderByWithRelationInputObjectSchema = Schema;
