import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { InstitutionRelationFilterObjectSchema } from './InstitutionRelationFilter.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { MedicalServiceRelationFilterObjectSchema } from './MedicalServiceRelationFilter.schema';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema),
        z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InstitutionMedicalServiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema),
        z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).array(),
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
    institutionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalServiceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basePrice: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    institution: z
      .union([
        z.lazy(() => InstitutionRelationFilterObjectSchema),
        z.lazy(() => InstitutionWhereInputObjectSchema),
      ])
      .optional(),
    medicalService: z
      .union([
        z.lazy(() => MedicalServiceRelationFilterObjectSchema),
        z.lazy(() => MedicalServiceWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const InstitutionMedicalServiceWhereInputObjectSchema = Schema;
