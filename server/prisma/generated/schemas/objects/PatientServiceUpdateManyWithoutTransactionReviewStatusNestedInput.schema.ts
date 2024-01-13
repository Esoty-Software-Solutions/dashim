import { z } from 'zod';
import { PatientServiceCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutTransactionReviewStatusInput.schema';
import { PatientServiceCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateOrConnectWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUpsertWithWhereUniqueWithoutTransactionReviewStatusInput.schema';
import { PatientServiceCreateManyTransactionReviewStatusInputEnvelopeObjectSchema } from './PatientServiceCreateManyTransactionReviewStatusInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUpdateWithWhereUniqueWithoutTransactionReviewStatusInput.schema';
import { PatientServiceUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema } from './PatientServiceUpdateManyWithWhereWithoutTransactionReviewStatusInput.schema';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithoutTransactionReviewStatusNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
          z.lazy(() => PatientServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientServiceUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema =
  Schema;
