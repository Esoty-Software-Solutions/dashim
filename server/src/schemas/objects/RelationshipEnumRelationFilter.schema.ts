import { z } from 'zod';
import { RelationshipEnumWhereInputObjectSchema } from './RelationshipEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => RelationshipEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RelationshipEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RelationshipEnumRelationFilterObjectSchema = Schema;
