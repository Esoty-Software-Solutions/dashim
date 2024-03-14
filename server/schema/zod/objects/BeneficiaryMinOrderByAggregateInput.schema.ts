/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryMinOrderByAggregateInput>;
export const BeneficiaryMinOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        firstName: z.lazy(() => SortOrderSchema).optional(),
        secondName: z.lazy(() => SortOrderSchema).optional(),
        thirdName: z.lazy(() => SortOrderSchema).optional(),
        fourthName: z.lazy(() => SortOrderSchema).optional(),
        lastName: z.lazy(() => SortOrderSchema).optional(),
        searchName: z.lazy(() => SortOrderSchema).optional(),
        birthDate: z.lazy(() => SortOrderSchema).optional(),
        genderId: z.lazy(() => SortOrderSchema).optional(),
        nationality: z.lazy(() => SortOrderSchema).optional(),
        nationalID: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z.lazy(() => SortOrderSchema).optional(),
        deactivationDate: z.lazy(() => SortOrderSchema).optional(),
        statusSetById: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryEntityId: z.lazy(() => SortOrderSchema).optional(),
        legacyCode: z.lazy(() => SortOrderSchema).optional(),
        relationshipId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
