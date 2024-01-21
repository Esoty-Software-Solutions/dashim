import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageMedicalServiceTemplateOrderByRelationAggregateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateOrderByRelationAggregateInput.schema';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './InsurancePolicyOrderByWithRelationInput.schema';
import { BeneficiaryBalanceOrderByRelationAggregateInputObjectSchema } from './BeneficiaryBalanceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageOrderByWithRelationInput> = z
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
    name: z.lazy(() => SortOrderSchema).optional(),
    copayDistrubtion: z.lazy(() => SortOrderSchema).optional(),
    threashold: z.lazy(() => SortOrderSchema).optional(),
    insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
    medicalServiceTemplates: z
      .lazy(
        () =>
          BenefitPackageMedicalServiceTemplateOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .lazy(() => InsurancePolicyOrderByWithRelationInputObjectSchema)
      .optional(),
    beneficiaryBalances: z
      .lazy(() => BeneficiaryBalanceOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BenefitPackageOrderByWithRelationInputObjectSchema = Schema;
