/* eslint-disable */
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutGenderInput.schema';
import { BeneficiaryUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUncheckedCreateInput>;
export const GenderEnumUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        user: z.lazy(() => UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryUncheckedCreateNestedManyWithoutGenderInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
