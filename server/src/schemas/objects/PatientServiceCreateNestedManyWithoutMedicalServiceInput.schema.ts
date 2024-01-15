import { z } from 'zod';
import { PatientServiceCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateWithoutMedicalServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalServiceInput.schema';
import { PatientServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './PatientServiceCreateOrConnectWithoutMedicalServiceInput.schema';
import { PatientServiceCreateManyMedicalServiceInputEnvelopeObjectSchema } from './PatientServiceCreateManyMedicalServiceInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateNestedManyWithoutMedicalServiceInput> =
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
      createMany: z
        .lazy(
          () => PatientServiceCreateManyMedicalServiceInputEnvelopeObjectSchema,
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

export const PatientServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema =
  Schema;
