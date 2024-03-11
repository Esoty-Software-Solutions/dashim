/* eslint-disable */
import { z } from 'zod';
import { InstitutionCountOutputTypeSelectObjectSchema } from './InstitutionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCountOutputTypeArgs>;
export const InstitutionCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => InstitutionCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
