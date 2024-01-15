import { z } from 'zod';
import { BeneficiarySubscriberIdIdCompoundUniqueInputObjectSchema } from './BeneficiarySubscriberIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    subscriberId_id: z
      .lazy(() => BeneficiarySubscriberIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryWhereUniqueInputObjectSchema = Schema;
