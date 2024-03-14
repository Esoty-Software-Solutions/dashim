/* eslint-disable */
import { z } from 'zod';
import { RoleEnumSelectObjectSchema } from './RoleEnumSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RoleEnumArgs>;
export const RoleEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => RoleEnumSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
