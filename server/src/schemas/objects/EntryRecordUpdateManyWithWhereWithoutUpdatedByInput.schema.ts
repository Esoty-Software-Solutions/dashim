import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutEntryRecordServiceUpdatesInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateManyWithoutEntryRecordServiceUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema;
