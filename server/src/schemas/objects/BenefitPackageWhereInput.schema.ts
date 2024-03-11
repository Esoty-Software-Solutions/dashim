import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableListFilterObjectSchema } from './IntNullableListFilter.schema';
import { BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema } from './BenefitPackageMedicalServiceCategoryListRelationFilter.schema';
import { InsurancePolicyRelationFilterObjectSchema } from './InsurancePolicyRelationFilter.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { BeneficiaryBalanceListRelationFilterObjectSchema } from './BeneficiaryBalanceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BenefitPackageWhereInputObjectSchema),
        z.lazy(() => BenefitPackageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BenefitPackageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BenefitPackageWhereInputObjectSchema),
        z.lazy(() => BenefitPackageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    deactivationDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    copayDistrubtion: z
      .lazy(() => IntNullableListFilterObjectSchema)
      .optional(),
    threashold: z.lazy(() => IntNullableListFilterObjectSchema).optional(),
    insurancePolicyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalServiceCategories: z
      .lazy(
        () =>
          BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .union([
        z.lazy(() => InsurancePolicyRelationFilterObjectSchema),
        z.lazy(() => InsurancePolicyWhereInputObjectSchema),
      ])
      .optional(),
    beneficiaryBalances: z
      .lazy(() => BeneficiaryBalanceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BenefitPackageWhereInputObjectSchema = Schema;
