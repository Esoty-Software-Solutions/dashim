import { z } from 'zod';
import { CityCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateWithoutStatusSetByInput> =
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
      city: z.lazy(
        () => CityCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema,
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
      futureStatus: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema =
  Schema;
