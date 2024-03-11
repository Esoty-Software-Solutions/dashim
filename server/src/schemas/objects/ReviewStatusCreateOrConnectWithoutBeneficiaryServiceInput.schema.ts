import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
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

export const ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema =
  Schema;
