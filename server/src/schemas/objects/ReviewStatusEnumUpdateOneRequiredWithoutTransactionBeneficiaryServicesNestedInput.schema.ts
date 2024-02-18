import { z } from 'zod';
import { ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInputObjectSchema =
  Schema;
