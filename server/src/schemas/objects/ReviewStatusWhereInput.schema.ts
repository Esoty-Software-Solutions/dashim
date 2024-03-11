import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BeneficiaryServiceRelationFilterObjectSchema } from './BeneficiaryServiceRelationFilter.schema';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';
import { ReviewStatusEnumRelationFilterObjectSchema } from './ReviewStatusEnumRelationFilter.schema';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';

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
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedById: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    transactionReviewStatusId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalReviewStatusId: z
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
    beneficiaryService: z
      .union([
        z.lazy(() => BeneficiaryServiceRelationFilterObjectSchema),
        z.lazy(() => BeneficiaryServiceWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    transactionReviewStatus: z
      .union([
        z.lazy(() => ReviewStatusEnumRelationFilterObjectSchema),
        z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
      ])
      .optional(),
    medicalReviewStatus: z
      .union([
        z.lazy(() => ReviewStatusEnumRelationFilterObjectSchema),
        z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReviewStatusWhereInputObjectSchema = Schema;
