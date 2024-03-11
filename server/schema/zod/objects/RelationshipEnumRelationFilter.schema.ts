/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumWhereInputObjectSchema } from './RelationshipEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumRelationFilter>;
export const RelationshipEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => RelationshipEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => RelationshipEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
