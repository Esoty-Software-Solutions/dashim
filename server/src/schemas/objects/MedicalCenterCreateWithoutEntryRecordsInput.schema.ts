import { z } from 'zod';
import { MedicalCenterCreatephoneInputObjectSchema } from './MedicalCenterCreatephoneInput.schema';
import { MedicalCenterCreateemailInputObjectSchema } from './MedicalCenterCreateemailInput.schema';
import { CityCreateNestedOneWithoutMedicalcentersInputObjectSchema } from './CityCreateNestedOneWithoutMedicalcentersInput.schema';
import { TenantCreateNestedOneWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateNestedOneWithoutAssignedToMedicalCenterInput.schema';
import { MedicalServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateNestedManyWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateWithoutEntryRecordsInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    address: z.string().optional().nullable(),
    name: z.string(),
    code: z.string(),
    description: z.string(),
    phone: z
      .union([
        z.lazy(() => MedicalCenterCreatephoneInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => MedicalCenterCreateemailInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    website: z.string(),
    facebookLink: z.string(),
    googleMapsLink: z.string(),
    twitterLink: z.string(),
    instagramLink: z.string(),
    latitude: z.number().optional().nullable(),
    longitude: z.number().optional().nullable(),
    city: z.lazy(
      () => CityCreateNestedOneWithoutMedicalcentersInputObjectSchema,
    ),
    managingTenant: z.lazy(
      () =>
        TenantCreateNestedOneWithoutAssignedToMedicalCenterInputObjectSchema,
    ),
    services: z
      .lazy(
        () =>
          MedicalServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .lazy(
        () =>
          InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalCenterCreateWithoutEntryRecordsInputObjectSchema = Schema;
