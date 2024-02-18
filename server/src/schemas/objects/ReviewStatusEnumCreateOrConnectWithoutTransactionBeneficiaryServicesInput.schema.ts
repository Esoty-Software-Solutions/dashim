import { z } from 'zod';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInputObjectSchema =
  Schema;
