import { z } from 'zod';
import { PatientExaminationCreateWithoutServiceInputObjectSchema } from './PatientExaminationCreateWithoutServiceInput.schema';
import { PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutServiceInput.schema';
import { PatientExaminationCreateOrConnectWithoutServiceInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutServiceInput.schema';
import { PatientExaminationCreateManyServiceInputEnvelopeObjectSchema } from './PatientExaminationCreateManyServiceInputEnvelope.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateNestedManyWithoutServiceInput> =
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
      createMany: z
        .lazy(
          () => PatientExaminationCreateManyServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientExaminationCreateNestedManyWithoutServiceInputObjectSchema =
  Schema;
