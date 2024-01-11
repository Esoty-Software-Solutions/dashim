import { z } from 'zod';
import { EntryRecordCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateWithoutPatientExaminationInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientExaminationInput.schema';
import { EntryRecordCreateOrConnectWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateOrConnectWithoutPatientExaminationInput.schema';
import { EntryRecordUpsertWithoutPatientExaminationInputObjectSchema } from './EntryRecordUpsertWithoutPatientExaminationInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUpdateWithoutPatientExaminationInput.schema';
import { EntryRecordUncheckedUpdateWithoutPatientExaminationInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateOneRequiredWithoutPatientExaminationNestedInput> =
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
      upsert: z
        .lazy(() => EntryRecordUpsertWithoutPatientExaminationInputObjectSchema)
        .optional(),
      connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => EntryRecordUpdateWithoutPatientExaminationInputObjectSchema,
          ),
          z.lazy(
            () =>
              EntryRecordUncheckedUpdateWithoutPatientExaminationInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUpdateOneRequiredWithoutPatientExaminationNestedInputObjectSchema =
  Schema;
