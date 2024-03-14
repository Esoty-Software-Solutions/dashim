/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenderEnumOrderByWithRelationInputObjectSchema } from './GenderEnumOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BeneficiaryEntityOrderByWithRelationInputObjectSchema } from './BeneficiaryEntityOrderByWithRelationInput.schema';
import { RelationshipEnumOrderByWithRelationInputObjectSchema } from './RelationshipEnumOrderByWithRelationInput.schema';
import { FingerprintBiometricOrderByRelationAggregateInputObjectSchema } from './FingerprintBiometricOrderByRelationAggregateInput.schema';
import { IDCardOrderByRelationAggregateInputObjectSchema } from './IDCardOrderByRelationAggregateInput.schema';
import { FaceBiometricOrderByRelationAggregateInputObjectSchema } from './FaceBiometricOrderByRelationAggregateInput.schema';
import { VoiceBiometricOrderByRelationAggregateInputObjectSchema } from './VoiceBiometricOrderByRelationAggregateInput.schema';
import { EntryRecordOrderByRelationAggregateInputObjectSchema } from './EntryRecordOrderByRelationAggregateInput.schema';
import { BeneficiaryBalanceOrderByRelationAggregateInputObjectSchema } from './BeneficiaryBalanceOrderByRelationAggregateInput.schema';
import { BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema } from './BeneficiaryFutureStatusChangeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryOrderByWithRelationInput>;
export const BeneficiaryOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        firstName: z.lazy(() => SortOrderSchema).optional(),
        secondName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        thirdName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        fourthName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        lastName: z.lazy(() => SortOrderSchema).optional(),
        searchName: z.lazy(() => SortOrderSchema).optional(),
        birthDate: z.lazy(() => SortOrderSchema).optional(),
        genderId: z.lazy(() => SortOrderSchema).optional(),
        nationality: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        nationalID: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        statusSetById: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryEntityId: z.lazy(() => SortOrderSchema).optional(),
        legacyCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        relationshipId: z.lazy(() => SortOrderSchema).optional(),
        gender: z.lazy(() => GenderEnumOrderByWithRelationInputObjectSchema).optional(),
        StatusSetBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
        beneficiaryEntity: z.lazy(() => BeneficiaryEntityOrderByWithRelationInputObjectSchema).optional(),
        relationship: z.lazy(() => RelationshipEnumOrderByWithRelationInputObjectSchema).optional(),
        fingerprint: z.lazy(() => FingerprintBiometricOrderByRelationAggregateInputObjectSchema).optional(),
        idCard: z.lazy(() => IDCardOrderByRelationAggregateInputObjectSchema).optional(),
        face: z.lazy(() => FaceBiometricOrderByRelationAggregateInputObjectSchema).optional(),
        voice: z.lazy(() => VoiceBiometricOrderByRelationAggregateInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordOrderByRelationAggregateInputObjectSchema).optional(),
        beneficiaryBalances: z.lazy(() => BeneficiaryBalanceOrderByRelationAggregateInputObjectSchema).optional(),
        futureStatus: z.lazy(() => BeneficiaryFutureStatusChangeOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
