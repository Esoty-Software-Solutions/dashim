import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () =>
            FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema =
  Schema;
