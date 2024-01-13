import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateWithoutMedicalPatientExaminationInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusCreateWithoutMedicalPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutMedicalPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusCreateOrConnectWithoutMedicalPatientExaminationInputObjectSchema =
  Schema;
