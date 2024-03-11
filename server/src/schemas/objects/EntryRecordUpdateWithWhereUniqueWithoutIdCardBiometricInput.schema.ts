import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUpdateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutIdCardBiometricInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInputObjectSchema =
  Schema;
