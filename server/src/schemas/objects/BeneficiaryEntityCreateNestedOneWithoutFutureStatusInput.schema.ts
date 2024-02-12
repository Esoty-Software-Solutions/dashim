import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutFutureStatusInput.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateNestedOneWithoutFutureStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryEntityCreateNestedOneWithoutFutureStatusInputObjectSchema =
  Schema;
