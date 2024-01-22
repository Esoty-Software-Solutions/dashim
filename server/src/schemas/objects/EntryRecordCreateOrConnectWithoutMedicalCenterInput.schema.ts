import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutMedicalCenterInputObjectSchema =
  Schema;
