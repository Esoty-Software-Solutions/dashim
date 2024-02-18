import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
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

export const BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema =
  Schema;
