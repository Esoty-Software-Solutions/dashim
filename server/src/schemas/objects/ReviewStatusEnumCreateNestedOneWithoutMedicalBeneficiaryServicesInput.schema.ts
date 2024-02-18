import { z } from 'zod';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput> =
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
      connect: z
        .lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema =
  Schema;
