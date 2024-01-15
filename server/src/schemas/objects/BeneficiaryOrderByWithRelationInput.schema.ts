import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenderOrderByWithRelationInputObjectSchema } from './GenderOrderByWithRelationInput.schema';
import { SubscriberOrderByWithRelationInputObjectSchema } from './SubscriberOrderByWithRelationInput.schema';
import { RelationshipOrderByWithRelationInputObjectSchema } from './RelationshipOrderByWithRelationInput.schema';
import { FingerprintBiometricOrderByRelationAggregateInputObjectSchema } from './FingerprintBiometricOrderByRelationAggregateInput.schema';
import { IDCardOrderByRelationAggregateInputObjectSchema } from './IDCardOrderByRelationAggregateInput.schema';
import { FaceBiometricOrderByRelationAggregateInputObjectSchema } from './FaceBiometricOrderByRelationAggregateInput.schema';
import { VoiceBiometricOrderByRelationAggregateInputObjectSchema } from './VoiceBiometricOrderByRelationAggregateInput.schema';
import { EntryRecordOrderByRelationAggregateInputObjectSchema } from './EntryRecordOrderByRelationAggregateInput.schema';
import { BeneficiaryBalanceOrderByRelationAggregateInputObjectSchema } from './BeneficiaryBalanceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    secondName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    thirdName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    fourthName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    searchName: z.lazy(() => SortOrderSchema).optional(),
    birthDate: z.lazy(() => SortOrderSchema).optional(),
    genderId: z.lazy(() => SortOrderSchema).optional(),
    nationality: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    nationalID: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    residence: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    address: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    subscriberId: z.lazy(() => SortOrderSchema).optional(),
    legacyCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    relationshipId: z.lazy(() => SortOrderSchema).optional(),
    isFingerprintVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    isIdCardVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    isFaceVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    isVoiceVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    gender: z.lazy(() => GenderOrderByWithRelationInputObjectSchema).optional(),
    subscriber: z
      .lazy(() => SubscriberOrderByWithRelationInputObjectSchema)
      .optional(),
    relationship: z
      .lazy(() => RelationshipOrderByWithRelationInputObjectSchema)
      .optional(),
    fingerprint: z
      .lazy(() => FingerprintBiometricOrderByRelationAggregateInputObjectSchema)
      .optional(),
    idCard: z
      .lazy(() => IDCardOrderByRelationAggregateInputObjectSchema)
      .optional(),
    face: z
      .lazy(() => FaceBiometricOrderByRelationAggregateInputObjectSchema)
      .optional(),
    voice: z
      .lazy(() => VoiceBiometricOrderByRelationAggregateInputObjectSchema)
      .optional(),
    entryRecords: z
      .lazy(() => EntryRecordOrderByRelationAggregateInputObjectSchema)
      .optional(),
    beneficiaryBalances: z
      .lazy(() => BeneficiaryBalanceOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryOrderByWithRelationInputObjectSchema = Schema;
