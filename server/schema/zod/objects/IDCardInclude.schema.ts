/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { IDCardCountOutputTypeArgsObjectSchema } from './IDCardCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardInclude>;
export const IDCardIncludeObjectSchema: SchemaType = z
    .object({
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => IDCardCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
