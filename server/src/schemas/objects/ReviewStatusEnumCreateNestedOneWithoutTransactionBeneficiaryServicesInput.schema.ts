import { z } from 'zod';
import { ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema =
  Schema;
