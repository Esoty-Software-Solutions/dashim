import { z } from 'zod';
import { ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ReviewStatusWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInputObjectSchema =
  Schema;
