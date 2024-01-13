import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PatientServiceListRelationFilterObjectSchema } from './PatientServiceListRelationFilter.schema';
import { PatientExaminationListRelationFilterObjectSchema } from './PatientExaminationListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReviewStatusWhereInputObjectSchema),
        z.lazy(() => ReviewStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReviewStatusWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReviewStatusWhereInputObjectSchema),
        z.lazy(() => ReviewStatusWhereInputObjectSchema).array(),
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
    arabic: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    english: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    transactionPatientServices: z
      .lazy(() => PatientServiceListRelationFilterObjectSchema)
      .optional(),
    medicalPatientServices: z
      .lazy(() => PatientServiceListRelationFilterObjectSchema)
      .optional(),
    transactionPatientExamination: z
      .lazy(() => PatientExaminationListRelationFilterObjectSchema)
      .optional(),
    medicalPatientExamination: z
      .lazy(() => PatientExaminationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewStatusWhereInputObjectSchema = Schema;
