import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateWithoutPatientExaminationInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutPatientExaminationInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => EntryRecordCreateWithoutPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutPatientExaminationInputObjectSchema =
  Schema;
