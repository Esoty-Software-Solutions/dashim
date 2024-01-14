import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema } from './InstitutionCreateNestedOneWithoutPoliciesInput.schema';
import { SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateNestedManyWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutMedicalCentersInput> =
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
      serviceEntryTimeWindow: z.number().optional(),
      institution: z.lazy(
        () => InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema,
      ),
      subscribers: z
        .lazy(
          () =>
            SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
      packageMedicalServices: z
        .lazy(
          () =>
            PackageMedicalServicesCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema =
  Schema;
