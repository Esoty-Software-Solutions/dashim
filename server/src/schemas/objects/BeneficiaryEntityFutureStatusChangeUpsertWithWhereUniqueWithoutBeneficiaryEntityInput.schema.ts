import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
