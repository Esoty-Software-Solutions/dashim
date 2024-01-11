import { z } from 'zod';
import { PatientExaminationCreateWithoutServiceInputObjectSchema } from './PatientExaminationCreateWithoutServiceInput.schema';
import { PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutServiceInput.schema';
import { PatientExaminationCreateOrConnectWithoutServiceInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutServiceInput.schema';
import { PatientExaminationUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './PatientExaminationUpsertWithWhereUniqueWithoutServiceInput.schema';
import { PatientExaminationCreateManyServiceInputEnvelopeObjectSchema } from './PatientExaminationCreateManyServiceInputEnvelope.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './PatientExaminationUpdateWithWhereUniqueWithoutServiceInput.schema';
import { PatientExaminationUpdateManyWithWhereWithoutServiceInputObjectSchema } from './PatientExaminationUpdateManyWithWhereWithoutServiceInput.schema';
import { PatientExaminationScalarWhereInputObjectSchema } from './PatientExaminationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateManyWithoutServiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PatientExaminationCreateWithoutServiceInputObjectSchema),
          z
            .lazy(() => PatientExaminationCreateWithoutServiceInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientExaminationCreateOrConnectWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationCreateOrConnectWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => PatientExaminationCreateManyServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpdateManyWithWhereWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpdateManyWithWhereWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
          z.lazy(() => PatientExaminationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientExaminationUpdateManyWithoutServiceNestedInputObjectSchema =
  Schema;
