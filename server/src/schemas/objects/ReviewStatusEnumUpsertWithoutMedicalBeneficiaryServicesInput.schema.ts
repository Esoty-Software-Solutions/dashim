import { z } from 'zod';
import { ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutMedicalBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusEnumUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusEnumUncheckedUpdateWithoutMedicalBeneficiaryServicesInputObjectSchema,
        ),
      ]),
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

export const ReviewStatusEnumUpsertWithoutMedicalBeneficiaryServicesInputObjectSchema =
  Schema;
