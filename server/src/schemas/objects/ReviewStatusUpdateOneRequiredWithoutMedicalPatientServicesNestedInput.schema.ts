import { z } from 'zod';
import { ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUpsertWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUpsertWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUpdateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateOneRequiredWithoutMedicalPatientServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            ReviewStatusUpsertWithoutMedicalPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateWithoutMedicalPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUpdateOneRequiredWithoutMedicalPatientServicesNestedInputObjectSchema =
  Schema;
