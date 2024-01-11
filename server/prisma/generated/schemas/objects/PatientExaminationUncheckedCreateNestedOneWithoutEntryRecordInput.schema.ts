import { z } from 'zod';
import { PatientExaminationCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationCreateWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutEntryRecordInput.schema';
import { PatientExaminationCreateOrConnectWithoutEntryRecordInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutEntryRecordInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInput> =
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
      connect: z
        .lazy(() => PatientExaminationWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PatientExaminationUncheckedCreateNestedOneWithoutEntryRecordInputObjectSchema =
  Schema;
