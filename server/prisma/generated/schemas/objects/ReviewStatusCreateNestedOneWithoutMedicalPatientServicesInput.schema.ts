import { z } from 'zod';
import { ReviewStatusCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutMedicalPatientServicesInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInput> =
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
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInputObjectSchema =
  Schema;
