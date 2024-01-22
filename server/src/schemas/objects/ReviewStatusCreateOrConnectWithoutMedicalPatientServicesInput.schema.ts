import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
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

export const ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInputObjectSchema =
  Schema;
