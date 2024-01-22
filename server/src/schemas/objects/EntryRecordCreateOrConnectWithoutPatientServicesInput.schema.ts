import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateWithoutPatientServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutPatientServicesInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutPatientServicesInputObjectSchema =
  Schema;
