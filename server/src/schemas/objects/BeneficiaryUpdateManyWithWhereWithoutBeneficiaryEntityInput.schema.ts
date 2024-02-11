import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutBeneficiariesInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryUncheckedUpdateManyWithoutBeneficiariesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
