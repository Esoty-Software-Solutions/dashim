import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionOrderByWithRelationInputObjectSchema } from './InstitutionOrderByWithRelationInput.schema';
import { BeneficiaryEntityOrderByRelationAggregateInputObjectSchema } from './BeneficiaryEntityOrderByRelationAggregateInput.schema';
import { BenefitPackageOrderByRelationAggregateInputObjectSchema } from './BenefitPackageOrderByRelationAggregateInput.schema';
import { InsurancePolicyMedicalCenterOrderByRelationAggregateInputObjectSchema } from './InsurancePolicyMedicalCenterOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyOrderByWithRelationInput> = z
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
    Accumulatedlimit: z.lazy(() => SortOrderSchema).optional(),
    BalanceResetDate: z.lazy(() => SortOrderSchema).optional(),
    issueDate: z.lazy(() => SortOrderSchema).optional(),
    renewalDate: z.lazy(() => SortOrderSchema).optional(),
    serviceEntryTimeWindow: z.lazy(() => SortOrderSchema).optional(),
    institutionId: z.lazy(() => SortOrderSchema).optional(),
    institution: z
      .lazy(() => InstitutionOrderByWithRelationInputObjectSchema)
      .optional(),
    beneficiaryEntities: z
      .lazy(() => BeneficiaryEntityOrderByRelationAggregateInputObjectSchema)
      .optional(),
    benefitPackages: z
      .lazy(() => BenefitPackageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    medicalCenters: z
      .lazy(
        () =>
          InsurancePolicyMedicalCenterOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyOrderByWithRelationInputObjectSchema = Schema;
