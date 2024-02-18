import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ReviewStatusRelationFilterObjectSchema } from './ReviewStatusRelationFilter.schema';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';
import { EntryRecordRelationFilterObjectSchema } from './EntryRecordRelationFilter.schema';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';
import { MedicalServiceRelationFilterObjectSchema } from './MedicalServiceRelationFilter.schema';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BeneficiaryServiceWhereInputObjectSchema),
        z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BeneficiaryServiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BeneficiaryServiceWhereInputObjectSchema),
        z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).array(),
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
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedById: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
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
    Note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
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
    notes: z.lazy(() => JsonFilterObjectSchema).optional(),
    isExamination: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    groupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reviewStatusId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    entryRecordId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalServiceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    CreatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    UpdatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    reviewStatus: z
      .union([
        z.lazy(() => ReviewStatusRelationFilterObjectSchema),
        z.lazy(() => ReviewStatusWhereInputObjectSchema),
      ])
      .optional(),
    entryRecord: z
      .union([
        z.lazy(() => EntryRecordRelationFilterObjectSchema),
        z.lazy(() => EntryRecordWhereInputObjectSchema),
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

export const BeneficiaryServiceWhereInputObjectSchema = Schema;
