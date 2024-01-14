import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema),
        z
          .lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema),
        z
          .lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema)
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
    insurancePolicyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalCenterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const InsurancePolicyMedicalCenterScalarWhereInputObjectSchema = Schema;
