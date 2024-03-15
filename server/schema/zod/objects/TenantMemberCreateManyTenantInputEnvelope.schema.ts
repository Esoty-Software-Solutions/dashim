/* eslint-disable */
import { z } from 'zod';
import { TenantMemberCreateManyTenantInputObjectSchema } from './TenantMemberCreateManyTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberCreateManyTenantInputEnvelope>;
export const TenantMemberCreateManyTenantInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => TenantMemberCreateManyTenantInputObjectSchema),
            z.lazy(() => TenantMemberCreateManyTenantInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
