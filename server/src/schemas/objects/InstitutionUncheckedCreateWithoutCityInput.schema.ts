import { z } from 'zod';
import { InstitutionCreatephoneArrayInputObjectSchema } from './InstitutionCreatephoneArrayInput.schema';
import { InstitutionCreateemailArrayInputObjectSchema } from './InstitutionCreateemailArrayInput.schema';
import { InsurancePolicyUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedCreateNestedManyWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateNestedManyWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUncheckedCreateWithoutCityInput> = z
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
    legacyCode: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    phoneArray: z
      .union([
        z.lazy(() => InstitutionCreatephoneArrayInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    emailArray: z
      .union([
        z.lazy(() => InstitutionCreateemailArrayInputObjectSchema),
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
    policies: z
      .lazy(
        () =>
          InsurancePolicyUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema,
      )
      .optional(),
    MedicalCenterPricing: z
      .lazy(
        () =>
          InstitutionMedicalServiceUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InstitutionUncheckedCreateWithoutCityInputObjectSchema = Schema;
