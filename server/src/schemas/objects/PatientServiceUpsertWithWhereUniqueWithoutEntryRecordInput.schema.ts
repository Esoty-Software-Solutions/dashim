import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutEntryRecordInputObjectSchema } from './PatientServiceUpdateWithoutEntryRecordInput.schema';
import { PatientServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutEntryRecordInput.schema';
import { PatientServiceCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateWithoutEntryRecordInput.schema';
import { PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpsertWithWhereUniqueWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PatientServiceUpdateWithoutEntryRecordInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PatientServiceCreateWithoutEntryRecordInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema =
  Schema;
