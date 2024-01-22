import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUserIdTokenCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    token: z.string(),
  })
  .strict();

export const DeviceTokenUserIdTokenCompoundUniqueInputObjectSchema = Schema;
