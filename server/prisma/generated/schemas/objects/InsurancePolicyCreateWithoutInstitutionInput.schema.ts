import { z } from 'zod';
import { SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateNestedManyWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutInstitutionInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    limit: z.number(),
    serviceEntryTimeWindow: z.number().optional(),
    subscribers: z
      .lazy(
        () => SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
    packageMedicalServices: z
      .lazy(
        () =>
          PackageMedicalServicesCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
    medicalCenters: z
      .lazy(
        () =>
          InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyCreateWithoutInstitutionInputObjectSchema = Schema;
