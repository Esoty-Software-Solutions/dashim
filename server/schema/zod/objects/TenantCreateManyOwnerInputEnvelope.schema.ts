/* eslint-disable */
import { z } from 'zod';
import { TenantCreateManyOwnerInputObjectSchema } from './TenantCreateManyOwnerInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateManyOwnerInputEnvelope>;
export const TenantCreateManyOwnerInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => TenantCreateManyOwnerInputObjectSchema),
            z.lazy(() => TenantCreateManyOwnerInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
