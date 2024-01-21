import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutFutureStatusInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutFutureStatusInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutFutureStatusInputObjectSchema =
  Schema;
