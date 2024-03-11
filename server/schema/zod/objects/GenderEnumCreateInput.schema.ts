/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedManyWithoutGenderInputObjectSchema } from './UserCreateNestedManyWithoutGenderInput.schema';
import { BeneficiaryCreateNestedManyWithoutGenderInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCreateInput>;
export const GenderEnumCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        user: z.lazy(() => UserCreateNestedManyWithoutGenderInputObjectSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryCreateNestedManyWithoutGenderInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
