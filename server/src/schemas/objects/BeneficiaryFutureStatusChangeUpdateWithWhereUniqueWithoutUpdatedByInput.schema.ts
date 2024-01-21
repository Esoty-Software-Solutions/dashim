import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
