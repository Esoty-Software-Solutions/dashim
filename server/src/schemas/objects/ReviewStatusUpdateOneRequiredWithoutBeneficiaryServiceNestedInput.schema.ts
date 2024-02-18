import { z } from 'zod';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUpsertWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpsertWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => ReviewStatusUpsertWithoutBeneficiaryServiceInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInputObjectSchema =
  Schema;
