import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutEntryRecordInputObjectSchema } from './PatientServiceUpdateWithoutEntryRecordInput.schema';
import { PatientServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateWithWhereUniqueWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientServiceUpdateWithoutEntryRecordInputObjectSchema),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema =
  Schema;
