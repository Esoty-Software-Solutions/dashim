import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema } from './InstitutionCreateNestedOneWithoutPoliciesInput.schema';
import { SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutPackageMedicalServicesInput> =
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
      limit: z.number(),
      institution: z.lazy(
        () => InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema,
      ),
      subscribers: z
        .lazy(
          () =>
            SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
      medicalCenters: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema =
  Schema;
