/* eslint-disable */
import { z } from 'zod';
import { UserInputSchema } from '../input/UserInput.schema';
import { BeneficiaryInputSchema } from '../input/BeneficiaryInput.schema';
import { GenderEnumCountOutputTypeArgsObjectSchema } from './GenderEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumSelect>;
export const GenderEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserInputSchema.findMany)]).optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => GenderEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
