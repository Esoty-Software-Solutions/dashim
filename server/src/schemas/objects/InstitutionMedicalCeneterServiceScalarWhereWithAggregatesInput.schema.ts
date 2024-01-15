import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      isPublished: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isSoftDeleted: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isActive: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      deactivationReason: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      institutionId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      medicalCenterServiceId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      basePrice: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceScalarWhereWithAggregatesInputObjectSchema =
  Schema;
