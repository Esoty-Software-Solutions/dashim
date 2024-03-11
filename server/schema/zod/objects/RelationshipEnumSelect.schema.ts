/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryInputSchema } from '../input/BeneficiaryInput.schema';
import { RelationshipEnumCountOutputTypeArgsObjectSchema } from './RelationshipEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumSelect>;
export const RelationshipEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => RelationshipEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
