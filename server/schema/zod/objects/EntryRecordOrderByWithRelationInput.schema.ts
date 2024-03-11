/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './BeneficiaryOrderByWithRelationInput.schema';
import { FingerprintBiometricOrderByWithRelationInputObjectSchema } from './FingerprintBiometricOrderByWithRelationInput.schema';
import { IDCardOrderByWithRelationInputObjectSchema } from './IDCardOrderByWithRelationInput.schema';
import { FaceBiometricOrderByWithRelationInputObjectSchema } from './FaceBiometricOrderByWithRelationInput.schema';
import { VoiceBiometricOrderByWithRelationInputObjectSchema } from './VoiceBiometricOrderByWithRelationInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';
import { BeneficiaryServiceOrderByRelationAggregateInputObjectSchema } from './BeneficiaryServiceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordOrderByWithRelationInput>;
export const EntryRecordOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        updatedById: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        isValidated: z.lazy(() => SortOrderSchema).optional(),
        isManuallyInserted: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
        fingerprintId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        idCardId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        faceId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        voiceId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
        CreatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
        UpdatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryOrderByWithRelationInputObjectSchema).optional(),
        fingerprintBiometric: z.lazy(() => FingerprintBiometricOrderByWithRelationInputObjectSchema).optional(),
        idCardBiometric: z.lazy(() => IDCardOrderByWithRelationInputObjectSchema).optional(),
        faceBiometric: z.lazy(() => FaceBiometricOrderByWithRelationInputObjectSchema).optional(),
        voiceBiometric: z.lazy(() => VoiceBiometricOrderByWithRelationInputObjectSchema).optional(),
        medicalCenter: z.lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema).optional(),
        beneficiaryServices: z.lazy(() => BeneficiaryServiceOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
