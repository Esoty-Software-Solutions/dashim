import { z } from 'zod';
import { ReviewStatusUpdateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUpdateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithoutMedicalPatientServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusUpdateWithoutMedicalPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutMedicalPatientServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithoutMedicalPatientServicesInputObjectSchema =
  Schema;
