import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateWithoutEntryRecordInput.schema';
import { PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateOrConnectWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PatientServiceCreateWithoutEntryRecordInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceCreateOrConnectWithoutEntryRecordInputObjectSchema =
  Schema;
