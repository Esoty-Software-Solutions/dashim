import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUpdateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
