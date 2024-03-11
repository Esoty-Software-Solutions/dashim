import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUpdateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutVoiceBiometricInput.schema';
import { EntryRecordCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutVoiceBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutVoiceBiometricInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutVoiceBiometricInputObjectSchema =
  Schema;
