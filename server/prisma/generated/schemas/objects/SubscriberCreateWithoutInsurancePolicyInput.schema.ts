import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutMembersInputObjectSchema } from './InstitutionCreateNestedOneWithoutMembersInput.schema';
import { BeneficiaryCreateNestedManyWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateWithoutInsurancePolicyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    institution: z.lazy(
      () => InstitutionCreateNestedOneWithoutMembersInputObjectSchema,
    ),
    beneficiary: z
      .lazy(() => BeneficiaryCreateNestedManyWithoutSubscriberInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberCreateWithoutInsurancePolicyInputObjectSchema = Schema;
