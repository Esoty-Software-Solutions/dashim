import { z } from 'zod';
import { EntryRecordCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateWithoutPatientServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutPatientServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutPatientServicesInput.schema';
import { EntryRecordCreateOrConnectWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateOrConnectWithoutPatientServicesInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedOneWithoutPatientServicesInput> =
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
      connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const EntryRecordCreateNestedOneWithoutPatientServicesInputObjectSchema =
  Schema;
