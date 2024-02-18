import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CityEnumOrderByWithRelationInputObjectSchema } from './CityEnumOrderByWithRelationInput.schema';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './InsurancePolicyOrderByWithRelationInput.schema';
import { BeneficiaryOrderByRelationAggregateInputObjectSchema } from './BeneficiaryOrderByRelationAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
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
    cityId: z.lazy(() => SortOrderSchema).optional(),
    address: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
    StatusSetBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    city: z.lazy(() => CityEnumOrderByWithRelationInputObjectSchema).optional(),
    insurancePolicy: z
      .lazy(() => InsurancePolicyOrderByWithRelationInputObjectSchema)
      .optional(),
    beneficiaries: z
      .lazy(() => BeneficiaryOrderByRelationAggregateInputObjectSchema)
      .optional(),
    futureStatus: z
      .lazy(
        () =>
          BeneficiaryEntityFutureStatusChangeOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryEntityOrderByWithRelationInputObjectSchema = Schema;
