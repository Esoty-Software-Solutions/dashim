import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FaceBiometricWhereInputObjectSchema),
        z.lazy(() => FaceBiometricWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FaceBiometricWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FaceBiometricWhereInputObjectSchema),
        z.lazy(() => FaceBiometricWhereInputObjectSchema).array(),
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
    hash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficiaryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficiary: z
      .union([
        z.lazy(() => BeneficiaryRelationFilterObjectSchema),
        z.lazy(() => BeneficiaryWhereInputObjectSchema),
      ])
      .optional(),
    entryRecords: z
      .lazy(() => EntryRecordListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const FaceBiometricWhereInputObjectSchema = Schema;
