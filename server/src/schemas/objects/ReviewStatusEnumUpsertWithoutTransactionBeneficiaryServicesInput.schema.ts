import { z } from 'zod';
import { ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema,
        ),
      ]),
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

export const ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInputObjectSchema =
  Schema;
