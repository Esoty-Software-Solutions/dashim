import { z } from 'zod';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityUpdateManyMutationInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateManyWithoutBeneficiaryEntityStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryEntityUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateManyWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInputObjectSchema =
  Schema;
