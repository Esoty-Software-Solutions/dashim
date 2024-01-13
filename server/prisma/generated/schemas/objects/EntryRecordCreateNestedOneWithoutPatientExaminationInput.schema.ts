import { z } from 'zod';
import { EntryRecordCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateWithoutPatientExaminationInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientExaminationInput.schema';
import { EntryRecordCreateOrConnectWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateOrConnectWithoutPatientExaminationInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedOneWithoutPatientExaminationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            EntryRecordCreateOrConnectWithoutPatientExaminationInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const EntryRecordCreateNestedOneWithoutPatientExaminationInputObjectSchema =
  Schema;
