import { z } from 'zod';
import { FingerprintCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateWithoutEntryRecordsInput.schema';
import { FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateOrConnectWithoutEntryRecordsInput.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateNestedOneWithoutEntryRecordsInput> =
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
      connect: z.lazy(() => FingerprintWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const FingerprintCreateNestedOneWithoutEntryRecordsInputObjectSchema =
  Schema;
