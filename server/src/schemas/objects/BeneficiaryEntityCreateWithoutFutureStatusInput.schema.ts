import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInput.schema';
import { CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateWithoutFutureStatusInput> =
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
      StatusSetBy: z.lazy(
        () =>
          UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
      ),
      city: z.lazy(
        () =>
          CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema,
      ),
      insurancePolicy: z.lazy(
        () =>
          InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema,
      ),
      beneficiaries: z
        .lazy(
          () =>
            BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema =
  Schema;
