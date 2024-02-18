import { z } from 'zod';
import { TenantTypeEnumWhereInputObjectSchema } from './TenantTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => TenantTypeEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TenantTypeEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TenantTypeEnumRelationFilterObjectSchema = Schema;
