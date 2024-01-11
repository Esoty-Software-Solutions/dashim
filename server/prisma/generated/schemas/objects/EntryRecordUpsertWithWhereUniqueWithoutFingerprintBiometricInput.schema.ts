import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUpdateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutFingerprintBiometricInput.schema';
import { EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutFingerprintBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => EntryRecordUpdateWithoutFingerprintBiometricInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutFingerprintBiometricInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema =
  Schema;
