import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
