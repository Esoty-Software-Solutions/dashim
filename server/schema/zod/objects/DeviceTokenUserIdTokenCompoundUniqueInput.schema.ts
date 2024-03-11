/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUserIdTokenCompoundUniqueInput>;
export const DeviceTokenUserIdTokenCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        userId: z.string(),
        token: z.string(),
    })
    .strict() as SchemaType;
