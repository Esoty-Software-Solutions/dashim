import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
