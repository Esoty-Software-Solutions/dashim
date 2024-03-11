/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumCountOutputTypeSelectObjectSchema } from './FingerTypeEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumCountOutputTypeArgs>;
export const FingerTypeEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => FingerTypeEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
