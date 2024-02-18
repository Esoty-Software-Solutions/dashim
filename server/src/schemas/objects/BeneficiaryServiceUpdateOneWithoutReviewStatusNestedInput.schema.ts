import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUpsertWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpsertWithoutReviewStatusInput.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInput> =
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
      upsert: z
        .lazy(
          () => BeneficiaryServiceUpsertWithoutReviewStatusInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInputObjectSchema =
  Schema;
