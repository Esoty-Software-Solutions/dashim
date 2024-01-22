import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiarySubscriberIdIdCompoundUniqueInput> = z
  .object({
    subscriberId: z.string(),
    id: z.string(),
  })
  .strict();

export const BeneficiarySubscriberIdIdCompoundUniqueInputObjectSchema = Schema;
