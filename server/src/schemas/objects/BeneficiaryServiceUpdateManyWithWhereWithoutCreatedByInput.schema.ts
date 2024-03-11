import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServiceCreationsInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateManyWithoutBeneficiaryServiceCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
