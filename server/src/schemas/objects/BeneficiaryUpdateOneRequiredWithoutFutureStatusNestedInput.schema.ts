import { z } from 'zod';
import { BeneficiaryCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryCreateOrConnectWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFutureStatusInput.schema';
import { BeneficiaryUpsertWithoutFutureStatusInputObjectSchema } from './BeneficiaryUpsertWithoutFutureStatusInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutFutureStatusNestedInput> =
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
      upsert: z
        .lazy(() => BeneficiaryUpsertWithoutFutureStatusInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficiaryUpdateWithoutFutureStatusInputObjectSchema),
          z.lazy(
            () =>
              BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema =
  Schema;
