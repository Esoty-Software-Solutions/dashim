import { z } from 'zod';
import { BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpsertWithoutReviewStatusInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpsertWithoutReviewStatusInputObjectSchema =
  Schema;
