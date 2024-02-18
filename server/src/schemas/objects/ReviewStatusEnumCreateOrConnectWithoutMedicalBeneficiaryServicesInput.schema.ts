import { z } from 'zod';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusEnumCreateOrConnectWithoutMedicalBeneficiaryServicesInputObjectSchema =
  Schema;
