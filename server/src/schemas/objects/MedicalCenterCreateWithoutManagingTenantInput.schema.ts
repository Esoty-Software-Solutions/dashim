import { z } from 'zod';
import { MedicalCenterCreatephoneInputObjectSchema } from './MedicalCenterCreatephoneInput.schema';
import { MedicalCenterCreateemailInputObjectSchema } from './MedicalCenterCreateemailInput.schema';
import { CityEnumCreateNestedOneWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateNestedOneWithoutMedicalcentersInput.schema';
import { MedicalServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateNestedManyWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateNestedManyWithoutMedicalCenterInput.schema';
import { EntryRecordCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateNestedManyWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateWithoutManagingTenantInput> =
  z
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
        () => CityEnumCreateNestedOneWithoutMedicalcentersInputObjectSchema,
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
      entryRecords: z
        .lazy(
          () =>
            EntryRecordCreateNestedManyWithoutMedicalCenterInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterCreateWithoutManagingTenantInputObjectSchema = Schema;
