import { z } from 'zod';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput> =
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
            BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
