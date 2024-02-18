import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutEntryRecordServiceCreationsInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutEntryRecordServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateManyWithoutEntryRecordServiceCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
