import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutFutureStatusInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema =
  Schema;
