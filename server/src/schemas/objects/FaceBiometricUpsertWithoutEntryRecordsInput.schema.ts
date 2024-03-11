import { z } from 'zod';
import { FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const FaceBiometricUpsertWithoutEntryRecordsInputObjectSchema = Schema;
