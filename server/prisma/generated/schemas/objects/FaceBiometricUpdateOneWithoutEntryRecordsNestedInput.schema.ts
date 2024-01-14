import { z } from 'zod';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FaceBiometricUpsertWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpsertWithoutEntryRecordsInput.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUpdateOneWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => FaceBiometricUpsertWithoutEntryRecordsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => FaceBiometricWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const FaceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema =
  Schema;
