import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EntryRecordRelationFilterObjectSchema } from './EntryRecordRelationFilter.schema';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';
import { ReviewStatusRelationFilterObjectSchema } from './ReviewStatusRelationFilter.schema';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';
import { PatientServiceListRelationFilterObjectSchema } from './PatientServiceListRelationFilter.schema';
import { PackageMedicalServicesRelationFilterObjectSchema } from './PackageMedicalServicesRelationFilter.schema';
import { PackageMedicalServicesWhereInputObjectSchema } from './PackageMedicalServicesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientExaminationWhereInputObjectSchema),
        z.lazy(() => PatientExaminationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientExaminationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientExaminationWhereInputObjectSchema),
        z.lazy(() => PatientExaminationWhereInputObjectSchema).array(),
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
    entryRecord: z
      .union([
        z.lazy(() => EntryRecordRelationFilterObjectSchema),
        z.lazy(() => EntryRecordWhereInputObjectSchema),
      ])
      .optional(),
    transactionReviewStatus: z
      .union([
        z.lazy(() => ReviewStatusRelationFilterObjectSchema),
        z.lazy(() => ReviewStatusWhereInputObjectSchema),
      ])
      .optional(),
    medicalReviewStatus: z
      .union([
        z.lazy(() => ReviewStatusRelationFilterObjectSchema),
        z.lazy(() => ReviewStatusWhereInputObjectSchema),
      ])
      .optional(),
    patientServices: z
      .lazy(() => PatientServiceListRelationFilterObjectSchema)
      .optional(),
    service: z
      .union([
        z.lazy(() => PackageMedicalServicesRelationFilterObjectSchema),
        z.lazy(() => PackageMedicalServicesWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PatientExaminationWhereInputObjectSchema = Schema;
