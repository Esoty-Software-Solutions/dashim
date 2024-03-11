import { z } from 'zod';
import { InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUpsertWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpsertWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            InsurancePolicyUpsertWithoutBeneficiaryEntitiesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema =
  Schema;
