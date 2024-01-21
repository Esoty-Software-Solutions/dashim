import { z } from 'zod';
import { BeneficiaryCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryCreateOrConnectWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFutureStatusInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutFutureStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutFutureStatusInputObjectSchema),
          z.lazy(
            () =>
              BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BeneficiaryCreateOrConnectWithoutFutureStatusInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema =
  Schema;
