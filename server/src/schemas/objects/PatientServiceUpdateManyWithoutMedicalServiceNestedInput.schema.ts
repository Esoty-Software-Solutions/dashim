import { z } from 'zod';
import { PatientServiceCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateWithoutMedicalServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalServiceInput.schema';
import { PatientServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateOrConnectWithoutMedicalServiceInput.schema';
import { PatientServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './PatientServiceUpsertWithWhereUniqueWithoutMedicalServiceInput.schema';
import { PatientServiceCreateManyMedicalServiceInputEnvelopeObjectSchema } from './PatientServiceCreateManyMedicalServiceInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './PatientServiceUpdateWithWhereUniqueWithoutMedicalServiceInput.schema';
import { PatientServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema } from './PatientServiceUpdateManyWithWhereWithoutMedicalServiceInput.schema';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithoutMedicalServiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => PatientServiceCreateWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () => PatientServiceCreateWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => PatientServiceCreateManyMedicalServiceInputEnvelopeObjectSchema,
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
              PatientServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema,
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

export const PatientServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema =
  Schema;
