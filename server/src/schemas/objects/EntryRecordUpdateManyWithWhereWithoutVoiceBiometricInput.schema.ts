import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutEntryRecordsInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutVoiceBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateManyWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateManyWithWhereWithoutVoiceBiometricInputObjectSchema =
  Schema;
