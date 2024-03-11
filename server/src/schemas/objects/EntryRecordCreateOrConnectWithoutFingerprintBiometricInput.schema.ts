import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutFingerprintBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
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

export const EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema =
  Schema;
