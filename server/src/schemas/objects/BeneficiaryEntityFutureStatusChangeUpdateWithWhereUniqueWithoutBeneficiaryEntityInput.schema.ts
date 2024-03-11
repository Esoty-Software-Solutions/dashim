import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
