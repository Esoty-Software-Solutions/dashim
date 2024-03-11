/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberMemberIdIdCompoundUniqueInput>;
export const TenantMemberMemberIdIdCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        memberId: z.string(),
        id: z.string(),
    })
    .strict() as SchemaType;
