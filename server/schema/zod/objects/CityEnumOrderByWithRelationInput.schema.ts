/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CountryEnumOrderByWithRelationInputObjectSchema } from './CountryEnumOrderByWithRelationInput.schema';
import { InstitutionOrderByRelationAggregateInputObjectSchema } from './InstitutionOrderByRelationAggregateInput.schema';
import { MedicalCenterOrderByRelationAggregateInputObjectSchema } from './MedicalCenterOrderByRelationAggregateInput.schema';
import { BeneficiaryEntityOrderByRelationAggregateInputObjectSchema } from './BeneficiaryEntityOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumOrderByWithRelationInput>;
export const CityEnumOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        countryId: z.lazy(() => SortOrderSchema).optional(),
        country: z.lazy(() => CountryEnumOrderByWithRelationInputObjectSchema).optional(),
        institutions: z.lazy(() => InstitutionOrderByRelationAggregateInputObjectSchema).optional(),
        medicalcenters: z.lazy(() => MedicalCenterOrderByRelationAggregateInputObjectSchema).optional(),
        beneficiaryEntities: z.lazy(() => BeneficiaryEntityOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
