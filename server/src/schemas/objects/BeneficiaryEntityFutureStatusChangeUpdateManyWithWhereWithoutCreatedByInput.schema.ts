import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput> =
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
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
