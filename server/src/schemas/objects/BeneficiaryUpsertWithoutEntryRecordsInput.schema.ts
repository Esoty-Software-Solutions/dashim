import { z } from 'zod';
import { BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUpdateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutEntryRecordsInput.schema';
import { BeneficiaryCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutEntryRecordsInputObjectSchema = Schema;
