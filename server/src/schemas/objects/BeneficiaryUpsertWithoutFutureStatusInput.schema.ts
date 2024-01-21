import { z } from 'zod';
import { BeneficiaryUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutFutureStatusInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutFutureStatusInputObjectSchema),
      z.lazy(
        () => BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutFutureStatusInputObjectSchema),
      z.lazy(
        () => BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutFutureStatusInputObjectSchema = Schema;
