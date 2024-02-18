import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInput.schema';
import { CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateWithoutInsurancePolicyInput> =
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
      beneficiaries: z
        .lazy(
          () =>
            BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema,
        )
        .optional(),
      futureStatus: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema =
  Schema;
