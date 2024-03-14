/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumSelectObjectSchema } from './FingerTypeEnumSelect.schema';
import { FingerTypeEnumIncludeObjectSchema } from './FingerTypeEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumArgs>;
export const FingerTypeEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema).optional(),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
