import { z } from 'zod';
import { MedicalCenterCreatephoneInputObjectSchema } from './MedicalCenterCreatephoneInput.schema';
import { MedicalCenterCreateemailInputObjectSchema } from './MedicalCenterCreateemailInput.schema';
import { MedicalCenterServiceUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedCreateNestedManyWithoutMedicalCenterInput.schema';
import { PackageMedicalServicesUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedCreateNestedManyWithoutMedicalServiceInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateNestedManyWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedCreateNestedOneWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedCreateNestedOneWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUncheckedCreateWithoutManagingTenantInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      name: z.string(),
      code: z.string(),
      description: z.string(),
      cityHQ: z.string(),
      address: z.string().optional().nullable(),
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
      services: z
        .lazy(
          () =>
            MedicalCenterServiceUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema,
        )
        .optional(),
      beneftiPackages: z
        .lazy(
          () =>
            PackageMedicalServicesUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema,
        )
        .optional(),
      insurancePolicy: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema,
        )
        .optional(),
      timeWindow: z
        .lazy(
          () =>
            TimeWindowUncheckedCreateNestedOneWithoutMedicalCenterInputObjectSchema,
        )
        .optional(),
      entryRecords: z
        .lazy(
          () =>
            EntryRecordUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema =
  Schema;
