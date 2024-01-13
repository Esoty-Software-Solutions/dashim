import { z } from 'zod';
import { PatientServiceCreateWithoutServiceInputObjectSchema } from './PatientServiceCreateWithoutServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutServiceInput.schema';
import { PatientServiceCreateOrConnectWithoutServiceInputObjectSchema } from './PatientServiceCreateOrConnectWithoutServiceInput.schema';
import { PatientServiceCreateManyServiceInputEnvelopeObjectSchema } from './PatientServiceCreateManyServiceInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUncheckedCreateNestedManyWithoutServiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PatientServiceCreateWithoutServiceInputObjectSchema),
          z
            .lazy(() => PatientServiceCreateWithoutServiceInputObjectSchema)
            .array(),
          z.lazy(
            () => PatientServiceUncheckedCreateWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PatientServiceCreateOrConnectWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PatientServiceCreateManyServiceInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientServiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema =
  Schema;
