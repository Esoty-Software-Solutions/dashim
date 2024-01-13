import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUpdateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutMedicalCenterInput.schema';
import { EntryRecordCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
