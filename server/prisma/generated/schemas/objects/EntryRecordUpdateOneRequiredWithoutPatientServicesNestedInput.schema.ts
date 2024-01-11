import { z } from 'zod';
import { EntryRecordCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateWithoutPatientServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientServicesInput.schema';
import { EntryRecordCreateOrConnectWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateOrConnectWithoutPatientServicesInput.schema';
import { EntryRecordUpsertWithoutPatientServicesInputObjectSchema } from './EntryRecordUpsertWithoutPatientServicesInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutPatientServicesInputObjectSchema } from './EntryRecordUpdateWithoutPatientServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateOneRequiredWithoutPatientServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            EntryRecordCreateOrConnectWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => EntryRecordUpsertWithoutPatientServicesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => EntryRecordUpdateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              EntryRecordUncheckedUpdateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema =
  Schema;
