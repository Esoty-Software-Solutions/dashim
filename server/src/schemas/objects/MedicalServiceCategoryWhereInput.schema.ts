import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema } from './BenefitPackageMedicalServiceCategoryListRelationFilter.schema';
import { MedicalServiceListRelationFilterObjectSchema } from './MedicalServiceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
        z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MedicalServiceCategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
        z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).array(),
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
    dalilCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basePrice: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    IsPriceVaried: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneftiPackages: z
      .lazy(
        () =>
          BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema,
      )
      .optional(),
    services: z
      .lazy(() => MedicalServiceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MedicalServiceCategoryWhereInputObjectSchema = Schema;
