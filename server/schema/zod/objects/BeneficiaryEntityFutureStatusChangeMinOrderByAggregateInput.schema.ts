/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeMinOrderByAggregateInput>;
export const BeneficiaryEntityFutureStatusChangeMinOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        updatedById: z.lazy(() => SortOrderSchema).optional(),
        changeDate: z.lazy(() => SortOrderSchema).optional(),
        futureStatus: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryEntityId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
