import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { CityEnumRelationFilterObjectSchema } from './CityEnumRelationFilter.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { TenantRelationFilterObjectSchema } from './TenantRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { MedicalServiceListRelationFilterObjectSchema } from './MedicalServiceListRelationFilter.schema';
import { InsurancePolicyMedicalCenterListRelationFilterObjectSchema } from './InsurancePolicyMedicalCenterListRelationFilter.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MedicalCenterWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema).array(),
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
    cityId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    email: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    website: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    facebookLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    googleMapsLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    twitterLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    instagramLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    latitude: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    longitude: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    managingTenantId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    city: z
      .union([
        z.lazy(() => CityEnumRelationFilterObjectSchema),
        z.lazy(() => CityEnumWhereInputObjectSchema),
      ])
      .optional(),
    managingTenant: z
      .union([
        z.lazy(() => TenantRelationFilterObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema),
      ])
      .optional(),
    services: z
      .lazy(() => MedicalServiceListRelationFilterObjectSchema)
      .optional(),
    insurancePolicy: z
      .lazy(() => InsurancePolicyMedicalCenterListRelationFilterObjectSchema)
      .optional(),
    entryRecords: z
      .lazy(() => EntryRecordListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MedicalCenterWhereInputObjectSchema = Schema;
