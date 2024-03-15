/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCountOrderByAggregateInput>;
export const BeneficiaryServiceCountOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        updatedById: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z.lazy(() => SortOrderSchema).optional(),
        deactivationDate: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        Note: z.lazy(() => SortOrderSchema).optional(),
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
    })
    .strict() as SchemaType;
