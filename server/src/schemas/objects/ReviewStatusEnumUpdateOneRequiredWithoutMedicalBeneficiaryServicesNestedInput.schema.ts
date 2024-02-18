import { z } from 'zod';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInputObjectSchema =
  Schema;
