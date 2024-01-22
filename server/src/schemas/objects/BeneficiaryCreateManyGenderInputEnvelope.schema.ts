import { z } from 'zod';
import { BeneficiaryCreateManyGenderInputObjectSchema } from './BeneficiaryCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateManyGenderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficiaryCreateManyGenderInputObjectSchema),
      z.lazy(() => BeneficiaryCreateManyGenderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficiaryCreateManyGenderInputEnvelopeObjectSchema = Schema;
