/* eslint-disable */
import { z } from 'zod';
import { InstitutionSelectObjectSchema } from './InstitutionSelect.schema';
import { InstitutionIncludeObjectSchema } from './InstitutionInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionArgs>;
export const InstitutionArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => InstitutionSelectObjectSchema).optional(),
        include: z.lazy(() => InstitutionIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
