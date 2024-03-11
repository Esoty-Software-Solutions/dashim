import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryServiceCountOrderByAggregateInputObjectSchema } from './BeneficiaryServiceCountOrderByAggregateInput.schema';
import { BeneficiaryServiceAvgOrderByAggregateInputObjectSchema } from './BeneficiaryServiceAvgOrderByAggregateInput.schema';
import { BeneficiaryServiceMaxOrderByAggregateInputObjectSchema } from './BeneficiaryServiceMaxOrderByAggregateInput.schema';
import { BeneficiaryServiceMinOrderByAggregateInputObjectSchema } from './BeneficiaryServiceMinOrderByAggregateInput.schema';
import { BeneficiaryServiceSumOrderByAggregateInputObjectSchema } from './BeneficiaryServiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      createdById: z.lazy(() => SortOrderSchema).optional(),
      updatedById: z
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
      name: z.lazy(() => SortOrderSchema).optional(),
      Note: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      billedAmmount: z.lazy(() => SortOrderSchema).optional(),
      allowedAmmount: z.lazy(() => SortOrderSchema).optional(),
      copayAmmount: z.lazy(() => SortOrderSchema).optional(),
      cashAmount: z.lazy(() => SortOrderSchema).optional(),
      coveredAmount: z.lazy(() => SortOrderSchema).optional(),
      defferedAmount: z.lazy(() => SortOrderSchema).optional(),
      coinsuranceAmount: z.lazy(() => SortOrderSchema).optional(),
      notes: z.lazy(() => SortOrderSchema).optional(),
      isExamination: z.lazy(() => SortOrderSchema).optional(),
      groupId: z.lazy(() => SortOrderSchema).optional(),
      reviewStatusId: z.lazy(() => SortOrderSchema).optional(),
      entryRecordId: z.lazy(() => SortOrderSchema).optional(),
      medicalServiceId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => BeneficiaryServiceCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => BeneficiaryServiceAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => BeneficiaryServiceMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => BeneficiaryServiceMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => BeneficiaryServiceSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryServiceOrderByWithAggregationInputObjectSchema = Schema;
