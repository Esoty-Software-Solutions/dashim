import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateWithoutFaceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutFaceBiometricInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutFaceBiometricInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema =
  Schema;
