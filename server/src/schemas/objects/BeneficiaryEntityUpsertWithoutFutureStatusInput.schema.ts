import { z } from 'zod';
import { BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpsertWithoutFutureStatusInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema,
        ),
      ]),
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

export const BeneficiaryEntityUpsertWithoutFutureStatusInputObjectSchema =
  Schema;
