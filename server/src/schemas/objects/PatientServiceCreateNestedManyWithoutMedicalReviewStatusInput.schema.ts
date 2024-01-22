import { z } from 'zod';
import { PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateOrConnectWithoutMedicalReviewStatusInput.schema';
import { PatientServiceCreateManyMedicalReviewStatusInputEnvelopeObjectSchema } from './PatientServiceCreateManyMedicalReviewStatusInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateNestedManyWithoutMedicalReviewStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PatientServiceCreateManyMedicalReviewStatusInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientServiceCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
