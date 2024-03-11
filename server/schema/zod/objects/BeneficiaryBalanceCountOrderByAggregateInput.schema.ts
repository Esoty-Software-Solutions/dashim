/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCountOrderByAggregateInput>;
export const BeneficiaryBalanceCountOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
        beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
        balancePending: z.lazy(() => SortOrderSchema).optional(),
        balanceActual: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
