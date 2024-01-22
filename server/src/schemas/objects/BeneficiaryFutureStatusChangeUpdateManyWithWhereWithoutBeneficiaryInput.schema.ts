import { z } from 'zod';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema =
  Schema;
