import { z } from 'zod';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityUpdateManyMutationInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyWithoutBeneficiaryEntitiesInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateManyWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateManyWithWhereWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryEntityUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateManyWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpdateManyWithWhereWithoutCityInputObjectSchema =
  Schema;
