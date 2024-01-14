import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateManyWithWhereWithoutSubscriberInputObjectSchema =
  Schema;
