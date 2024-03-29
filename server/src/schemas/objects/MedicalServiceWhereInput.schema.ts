import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { BeneficiaryServiceListRelationFilterObjectSchema } from './BeneficiaryServiceListRelationFilter.schema';
import { InstitutionMedicalServiceListRelationFilterObjectSchema } from './InstitutionMedicalServiceListRelationFilter.schema';
import { MedicalServiceCategoryRelationFilterObjectSchema } from './MedicalServiceCategoryRelationFilter.schema';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MedicalServiceWhereInputObjectSchema),
        z.lazy(() => MedicalServiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MedicalServiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MedicalServiceWhereInputObjectSchema),
        z.lazy(() => MedicalServiceWhereInputObjectSchema).array(),
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
    medicalCenterCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basePrice: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    medicalCenterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalCenter: z
      .union([
        z.lazy(() => MedicalCenterRelationFilterObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
      ])
      .optional(),
    beneficiaryServices: z
      .lazy(() => BeneficiaryServiceListRelationFilterObjectSchema)
      .optional(),
    institutionPricing: z
      .lazy(() => InstitutionMedicalServiceListRelationFilterObjectSchema)
      .optional(),
    category: z
      .union([
        z.lazy(() => MedicalServiceCategoryRelationFilterObjectSchema),
        z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MedicalServiceWhereInputObjectSchema = Schema;
