/* eslint-disable */
import { z } from 'zod';
import { CurrencyEnumWhereInputObjectSchema } from './CurrencyEnumWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CurrencyEnumWhereUniqueInput>;
export const CurrencyEnumWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        code: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => CurrencyEnumWhereInputObjectSchema),
                z.lazy(() => CurrencyEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => CurrencyEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => CurrencyEnumWhereInputObjectSchema),
                z.lazy(() => CurrencyEnumWhereInputObjectSchema).array(),
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        arabic: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        symbol: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        buyExchangeRate: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
        SellExchangeRate: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    })
    .strict() as SchemaType;
