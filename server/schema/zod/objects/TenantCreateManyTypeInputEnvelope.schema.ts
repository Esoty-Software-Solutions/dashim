/* eslint-disable */
import { z } from 'zod';
import { TenantCreateManyTypeInputObjectSchema } from './TenantCreateManyTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateManyTypeInputEnvelope>;
export const TenantCreateManyTypeInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => TenantCreateManyTypeInputObjectSchema),
            z.lazy(() => TenantCreateManyTypeInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
