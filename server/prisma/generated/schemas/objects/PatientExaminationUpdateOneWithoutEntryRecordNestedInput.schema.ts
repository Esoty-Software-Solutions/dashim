import { z } from 'zod';
import { PatientExaminationCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationCreateWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutEntryRecordInput.schema';
import { PatientExaminationCreateOrConnectWithoutEntryRecordInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutEntryRecordInput.schema';
import { PatientExaminationUpsertWithoutEntryRecordInputObjectSchema } from './PatientExaminationUpsertWithoutEntryRecordInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUpdateWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateOneWithoutEntryRecordNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => PatientExaminationCreateWithoutEntryRecordInputObjectSchema,
          ),
          z.lazy(
            () =>
              PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PatientExaminationCreateOrConnectWithoutEntryRecordInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => PatientExaminationUpsertWithoutEntryRecordInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => PatientExaminationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PatientExaminationUpdateWithoutEntryRecordInputObjectSchema,
          ),
          z.lazy(
            () =>
              PatientExaminationUncheckedUpdateWithoutEntryRecordInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PatientExaminationUpdateOneWithoutEntryRecordNestedInputObjectSchema =
  Schema;
