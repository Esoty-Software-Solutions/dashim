import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
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
      benefitPackageId: z
        .union([z.lazy(() => StringFilterObjectSchema), z.string()])
        .optional(),
      medicalCenterServiceTemplateId: z
        .union([z.lazy(() => StringFilterObjectSchema), z.string()])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema =
  Schema;
