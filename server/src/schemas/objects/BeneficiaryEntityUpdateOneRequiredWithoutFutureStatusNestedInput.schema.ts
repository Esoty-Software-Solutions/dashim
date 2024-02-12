import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUpsertWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUpsertWithoutFutureStatusInput.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateOneRequiredWithoutFutureStatusNestedInput> =
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
      upsert: z
        .lazy(() => BeneficiaryEntityUpsertWithoutFutureStatusInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryEntityUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema =
  Schema;
