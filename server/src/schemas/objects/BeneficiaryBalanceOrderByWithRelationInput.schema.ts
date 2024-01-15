import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './BeneficiaryOrderByWithRelationInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
    beneftiPackageId: z.lazy(() => SortOrderSchema).optional(),
    balance: z.lazy(() => SortOrderSchema).optional(),
    beneficiary: z
      .lazy(() => BeneficiaryOrderByWithRelationInputObjectSchema)
      .optional(),
    beneftiPackage: z
      .lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryBalanceOrderByWithRelationInputObjectSchema = Schema;
