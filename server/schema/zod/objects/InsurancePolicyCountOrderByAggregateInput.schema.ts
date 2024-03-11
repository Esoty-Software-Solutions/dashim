/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCountOrderByAggregateInput>;
export const InsurancePolicyCountOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z.lazy(() => SortOrderSchema).optional(),
        deactivationDate: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        Accumulatedlimit: z.lazy(() => SortOrderSchema).optional(),
        BalanceResetDate: z.lazy(() => SortOrderSchema).optional(),
        issueDate: z.lazy(() => SortOrderSchema).optional(),
        renewalDate: z.lazy(() => SortOrderSchema).optional(),
        serviceEntryTimeWindow: z.lazy(() => SortOrderSchema).optional(),
        institutionId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
