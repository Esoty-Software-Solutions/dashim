import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationCreateWithoutEntryRecordInput.schema';
import { PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateOrConnectWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => PatientExaminationCreateWithoutEntryRecordInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationCreateOrConnectWithoutEntryRecordInputObjectSchema =
  Schema;
