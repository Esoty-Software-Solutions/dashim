import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUpdateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutVoiceBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutVoiceBiometricInputObjectSchema =
  Schema;
