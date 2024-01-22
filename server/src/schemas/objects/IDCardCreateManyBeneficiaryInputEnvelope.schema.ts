import { z } from 'zod';
import { IDCardCreateManyBeneficiaryInputObjectSchema } from './IDCardCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateManyBeneficiaryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => IDCardCreateManyBeneficiaryInputObjectSchema),
      z.lazy(() => IDCardCreateManyBeneficiaryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const IDCardCreateManyBeneficiaryInputEnvelopeObjectSchema = Schema;
