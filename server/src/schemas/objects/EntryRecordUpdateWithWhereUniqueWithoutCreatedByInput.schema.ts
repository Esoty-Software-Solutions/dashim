import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutCreatedByInputObjectSchema } from './EntryRecordUpdateWithoutCreatedByInput.schema';
import { EntryRecordUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
