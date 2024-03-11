import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutReviewStatusInput.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateNestedOneWithoutReviewStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema =
  Schema;
