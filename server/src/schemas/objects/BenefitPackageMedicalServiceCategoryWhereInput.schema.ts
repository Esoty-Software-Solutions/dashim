import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BenefitPackageRelationFilterObjectSchema } from './BenefitPackageRelationFilter.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';
import { MedicalServiceCategoryRelationFilterObjectSchema } from './MedicalServiceCategoryRelationFilter.schema';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema,
          ),
          z
            .lazy(
              () => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema,
          ),
          z
            .lazy(
              () => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema,
            )
            .array(),
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
      benefitPackageId: z
        .union([z.lazy(() => StringFilterObjectSchema), z.string()])
        .optional(),
      medicalServiceCategoryId: z
        .union([z.lazy(() => StringFilterObjectSchema), z.string()])
        .optional(),
      benefitPackage: z
        .union([
          z.lazy(() => BenefitPackageRelationFilterObjectSchema),
          z.lazy(() => BenefitPackageWhereInputObjectSchema),
        ])
        .optional(),
      medicalServiceCategory: z
        .union([
          z.lazy(() => MedicalServiceCategoryRelationFilterObjectSchema),
          z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryWhereInputObjectSchema =
  Schema;
