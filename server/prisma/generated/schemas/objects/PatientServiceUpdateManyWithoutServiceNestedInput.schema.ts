import { z } from 'zod';
import { PatientServiceCreateWithoutServiceInputObjectSchema } from './PatientServiceCreateWithoutServiceInput.schema';
import { PatientServiceUncheckedCreateWithoutServiceInputObjectSchema } from './PatientServiceUncheckedCreateWithoutServiceInput.schema';
import { PatientServiceCreateOrConnectWithoutServiceInputObjectSchema } from './PatientServiceCreateOrConnectWithoutServiceInput.schema';
import { PatientServiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './PatientServiceUpsertWithWhereUniqueWithoutServiceInput.schema';
import { PatientServiceCreateManyServiceInputEnvelopeObjectSchema } from './PatientServiceCreateManyServiceInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './PatientServiceUpdateWithWhereUniqueWithoutServiceInput.schema';
import { PatientServiceUpdateManyWithWhereWithoutServiceInputObjectSchema } from './PatientServiceUpdateManyWithWhereWithoutServiceInput.schema';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithoutServiceNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PatientServiceCreateManyServiceInputEnvelopeObjectSchema)
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
              PatientServiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateManyWithWhereWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateManyWithWhereWithoutServiceInputObjectSchema,
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

export const PatientServiceUpdateManyWithoutServiceNestedInputObjectSchema =
  Schema;
