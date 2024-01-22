import { z } from 'zod';
import { PatientServiceCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateWithoutEntryRecordInput.schema';
import { PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedCreateWithoutEntryRecordInput.schema';
import { PatientServiceCreateOrConnectWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateOrConnectWithoutEntryRecordInput.schema';
import { PatientServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema } from './PatientServiceUpsertWithWhereUniqueWithoutEntryRecordInput.schema';
import { PatientServiceCreateManyEntryRecordInputEnvelopeObjectSchema } from './PatientServiceCreateManyEntryRecordInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema } from './PatientServiceUpdateWithWhereUniqueWithoutEntryRecordInput.schema';
import { PatientServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema } from './PatientServiceUpdateManyWithWhereWithoutEntryRecordInput.schema';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUncheckedUpdateManyWithoutEntryRecordNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PatientServiceCreateWithoutEntryRecordInputObjectSchema),
          z
            .lazy(() => PatientServiceCreateWithoutEntryRecordInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateOrConnectWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => PatientServiceCreateManyEntryRecordInputEnvelopeObjectSchema,
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
              PatientServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateManyWithWhereWithoutEntryRecordInputObjectSchema,
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

export const PatientServiceUncheckedUpdateManyWithoutEntryRecordNestedInputObjectSchema =
  Schema;
