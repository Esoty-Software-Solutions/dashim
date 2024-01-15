import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutIdCardBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema =
  Schema;
