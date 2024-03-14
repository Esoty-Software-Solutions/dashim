/* eslint-disable */
import { z } from 'zod';
import { TenantMemberCreateManyMemberInputObjectSchema } from './TenantMemberCreateManyMemberInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberCreateManyMemberInputEnvelope>;
export const TenantMemberCreateManyMemberInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => TenantMemberCreateManyMemberInputObjectSchema),
            z.lazy(() => TenantMemberCreateManyMemberInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
