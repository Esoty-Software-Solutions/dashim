import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryCountOrderByAggregateInputObjectSchema } from './BeneficiaryCountOrderByAggregateInput.schema';
import { BeneficiaryMaxOrderByAggregateInputObjectSchema } from './BeneficiaryMaxOrderByAggregateInput.schema';
import { BeneficiaryMinOrderByAggregateInputObjectSchema } from './BeneficiaryMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryOrderByWithAggregationInput> = z
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
    deactivationDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    statusSetById: z.lazy(() => SortOrderSchema).optional(),
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
    _count: z
      .lazy(() => BeneficiaryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BeneficiaryMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BeneficiaryMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryOrderByWithAggregationInputObjectSchema = Schema;
