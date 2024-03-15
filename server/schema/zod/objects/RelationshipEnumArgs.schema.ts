/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumSelectObjectSchema } from './RelationshipEnumSelect.schema';
import { RelationshipEnumIncludeObjectSchema } from './RelationshipEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumArgs>;
export const RelationshipEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema).optional(),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
