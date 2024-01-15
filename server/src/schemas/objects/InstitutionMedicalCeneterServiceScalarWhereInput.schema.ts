import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
            )
            .array(),
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
      institutionId: z
        .union([z.lazy(() => StringFilterObjectSchema), z.string()])
        .optional(),
      medicalCenterServiceId: z
        .union([z.lazy(() => StringFilterObjectSchema), z.string()])
        .optional(),
      basePrice: z
        .union([z.lazy(() => IntFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema =
  Schema;
