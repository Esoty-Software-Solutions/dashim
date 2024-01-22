import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FingerTypeRelationFilterObjectSchema } from './FingerTypeRelationFilter.schema';
import { FingerTypeWhereInputObjectSchema } from './FingerTypeWhereInput.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FingerprintBiometricWhereInputObjectSchema),
        z.lazy(() => FingerprintBiometricWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FingerprintBiometricWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FingerprintBiometricWhereInputObjectSchema),
        z.lazy(() => FingerprintBiometricWhereInputObjectSchema).array(),
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
    fingerTypeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    hash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficiaryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fingerType: z
      .union([
        z.lazy(() => FingerTypeRelationFilterObjectSchema),
        z.lazy(() => FingerTypeWhereInputObjectSchema),
      ])
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

export const FingerprintBiometricWhereInputObjectSchema = Schema;
