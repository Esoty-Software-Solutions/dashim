import { z } from 'zod';
import { FingerprintCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateWithoutEntryRecordsInput.schema';
import { FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateOrConnectWithoutEntryRecordsInput.schema';
import { FingerprintUpsertWithoutEntryRecordsInputObjectSchema } from './FingerprintUpsertWithoutEntryRecordsInput.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintUpdateWithoutEntryRecordsInput.schema';
import { FingerprintUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpdateOneWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FingerprintCreateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => FingerprintCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => FingerprintUpsertWithoutEntryRecordsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => FingerprintWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FingerprintUpdateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              FingerprintUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const FingerprintUpdateOneWithoutEntryRecordsNestedInputObjectSchema =
  Schema;
