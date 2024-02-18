import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema;
