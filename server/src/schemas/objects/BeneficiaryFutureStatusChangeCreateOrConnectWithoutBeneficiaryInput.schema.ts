import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
