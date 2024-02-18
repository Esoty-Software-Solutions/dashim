import { z } from 'zod';
import { BeneficiaryServiceCreateManyEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateManyEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateManyEntryRecordInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryServiceCreateManyEntryRecordInputObjectSchema),
        z
          .lazy(() => BeneficiaryServiceCreateManyEntryRecordInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryServiceCreateManyEntryRecordInputEnvelopeObjectSchema =
  Schema;
