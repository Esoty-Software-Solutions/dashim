import { z } from 'zod';
import { InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithoutBeneficiaryEntitiesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpsertWithoutBeneficiaryEntitiesInputObjectSchema =
  Schema;
