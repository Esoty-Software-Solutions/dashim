/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InsurancePolicyCountOrderByAggregateInputObjectSchema } from './InsurancePolicyCountOrderByAggregateInput.schema';
import { InsurancePolicyAvgOrderByAggregateInputObjectSchema } from './InsurancePolicyAvgOrderByAggregateInput.schema';
import { InsurancePolicyMaxOrderByAggregateInputObjectSchema } from './InsurancePolicyMaxOrderByAggregateInput.schema';
import { InsurancePolicyMinOrderByAggregateInputObjectSchema } from './InsurancePolicyMinOrderByAggregateInput.schema';
import { InsurancePolicySumOrderByAggregateInputObjectSchema } from './InsurancePolicySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyOrderByWithAggregationInput>;
export const InsurancePolicyOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        Accumulatedlimit: z.lazy(() => SortOrderSchema).optional(),
        BalanceResetDate: z.lazy(() => SortOrderSchema).optional(),
        issueDate: z.lazy(() => SortOrderSchema).optional(),
        renewalDate: z.lazy(() => SortOrderSchema).optional(),
        serviceEntryTimeWindow: z.lazy(() => SortOrderSchema).optional(),
        institutionId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => InsurancePolicyCountOrderByAggregateInputObjectSchema).optional(),
        _avg: z.lazy(() => InsurancePolicyAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => InsurancePolicyMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => InsurancePolicyMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => InsurancePolicySumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
