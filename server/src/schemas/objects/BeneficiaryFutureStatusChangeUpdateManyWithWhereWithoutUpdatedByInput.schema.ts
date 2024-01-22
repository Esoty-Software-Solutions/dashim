import { z } from 'zod';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput> =
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
            BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema;
