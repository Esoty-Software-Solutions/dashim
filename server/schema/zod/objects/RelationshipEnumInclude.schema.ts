/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryInputSchema } from '../input/BeneficiaryInput.schema';
import { RelationshipEnumCountOutputTypeArgsObjectSchema } from './RelationshipEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumInclude>;
export const RelationshipEnumIncludeObjectSchema: SchemaType = z
    .object({
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => RelationshipEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
