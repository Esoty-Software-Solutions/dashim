import { z } from 'zod';
import { ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithoutBeneficiaryServiceInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithoutBeneficiaryServiceInputObjectSchema =
  Schema;
