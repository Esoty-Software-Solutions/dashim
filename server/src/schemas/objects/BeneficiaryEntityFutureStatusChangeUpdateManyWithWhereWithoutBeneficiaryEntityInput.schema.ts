import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
