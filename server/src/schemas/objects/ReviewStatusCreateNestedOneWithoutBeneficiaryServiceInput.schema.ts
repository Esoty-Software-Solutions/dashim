import { z } from 'zod';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateNestedOneWithoutBeneficiaryServiceInput> =
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
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusCreateNestedOneWithoutBeneficiaryServiceInputObjectSchema =
  Schema;
