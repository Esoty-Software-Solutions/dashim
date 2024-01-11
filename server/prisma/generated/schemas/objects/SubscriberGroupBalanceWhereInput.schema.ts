import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { SubscriberGroupRelationFilterObjectSchema } from './SubscriberGroupRelationFilter.schema';
import { SubscriberGroupWhereInputObjectSchema } from './SubscriberGroupWhereInput.schema';
import { BenefitPackageRelationFilterObjectSchema } from './BenefitPackageRelationFilter.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubscriberGroupBalanceWhereInputObjectSchema),
        z.lazy(() => SubscriberGroupBalanceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubscriberGroupBalanceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubscriberGroupBalanceWhereInputObjectSchema),
        z.lazy(() => SubscriberGroupBalanceWhereInputObjectSchema).array(),
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
    subscriberGroupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneftiPackageId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    balance: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    subscriberGroup: z
      .union([
        z.lazy(() => SubscriberGroupRelationFilterObjectSchema),
        z.lazy(() => SubscriberGroupWhereInputObjectSchema),
      ])
      .optional(),
    beneftiPackage: z
      .union([
        z.lazy(() => BenefitPackageRelationFilterObjectSchema),
        z.lazy(() => BenefitPackageWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SubscriberGroupBalanceWhereInputObjectSchema = Schema;
