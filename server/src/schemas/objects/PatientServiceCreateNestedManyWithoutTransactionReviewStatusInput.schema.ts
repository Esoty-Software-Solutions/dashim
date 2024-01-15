import { z } from 'zod';
import { PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateOrConnectWithoutTransactionReviewStatusInput.schema';
import { PatientServiceCreateManyTransactionReviewStatusInputEnvelopeObjectSchema } from './PatientServiceCreateManyTransactionReviewStatusInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateNestedManyWithoutTransactionReviewStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PatientServiceCreateManyTransactionReviewStatusInputEnvelopeObjectSchema,
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

export const PatientServiceCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
