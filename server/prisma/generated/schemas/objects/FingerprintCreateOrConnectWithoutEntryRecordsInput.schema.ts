import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateWithoutEntryRecordsInput.schema';
import { FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FingerprintCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () => FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintCreateOrConnectWithoutEntryRecordsInputObjectSchema =
  Schema;
