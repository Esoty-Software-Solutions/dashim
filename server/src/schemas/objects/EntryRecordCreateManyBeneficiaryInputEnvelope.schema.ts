import { z } from 'zod';
import { EntryRecordCreateManyBeneficiaryInputObjectSchema } from './EntryRecordCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyBeneficiaryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EntryRecordCreateManyBeneficiaryInputObjectSchema),
        z.lazy(() => EntryRecordCreateManyBeneficiaryInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManyBeneficiaryInputEnvelopeObjectSchema = Schema;
