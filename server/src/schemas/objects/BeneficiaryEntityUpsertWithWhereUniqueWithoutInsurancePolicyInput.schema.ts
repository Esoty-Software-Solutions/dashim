import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUpdateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpsertWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => BeneficiaryEntityUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
