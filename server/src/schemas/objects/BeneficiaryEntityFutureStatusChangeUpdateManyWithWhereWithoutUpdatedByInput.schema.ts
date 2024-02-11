import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput> =
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
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema;
