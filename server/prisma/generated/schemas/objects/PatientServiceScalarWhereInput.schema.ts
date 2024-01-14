import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
        z.lazy(() => PatientServiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientServiceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
        z.lazy(() => PatientServiceScalarWhereInputObjectSchema).array(),
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
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isWorkInjury: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isExamination: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    billedAmmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    allowedAmmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    copayAmmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    cashAmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    coveredAmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    defferedAmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    coinsuranceAmount: z
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
    groupCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PatientServiceScalarWhereInputObjectSchema = Schema;
