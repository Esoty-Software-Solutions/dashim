import { z } from 'zod';
import { PatientServiceCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateWithoutEntryRecordInput.schema';
import { PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedCreateWithoutEntryRecordInput.schema';
import { PatientServiceCreateOrConnectWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateOrConnectWithoutEntryRecordInput.schema';
import { PatientServiceCreateManyEntryRecordInputEnvelopeObjectSchema } from './PatientServiceCreateManyEntryRecordInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateNestedManyWithoutEntryRecordInput> =
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
      createMany: z
        .lazy(
          () => PatientServiceCreateManyEntryRecordInputEnvelopeObjectSchema,
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

export const PatientServiceCreateNestedManyWithoutEntryRecordInputObjectSchema =
  Schema;
