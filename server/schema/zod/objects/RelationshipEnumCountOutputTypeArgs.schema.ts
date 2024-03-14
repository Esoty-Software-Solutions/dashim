/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumCountOutputTypeSelectObjectSchema } from './RelationshipEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumCountOutputTypeArgs>;
export const RelationshipEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => RelationshipEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
