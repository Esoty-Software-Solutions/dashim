import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
        z.lazy(() => PatientExaminationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientExaminationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
        z.lazy(() => PatientExaminationScalarWhereInputObjectSchema).array(),
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
    entryRecordId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isWorkInjury: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cash: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    limit: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    deffered: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    transactionReviewStatusId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalReviewStatusId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    serviceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    groupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PatientExaminationScalarWhereInputObjectSchema = Schema;
