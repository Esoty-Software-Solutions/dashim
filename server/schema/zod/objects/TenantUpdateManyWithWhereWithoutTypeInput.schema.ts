/* eslint-disable */
import { z } from 'zod';
import { TenantScalarWhereInputObjectSchema } from './TenantScalarWhereInput.schema';
import { TenantUpdateManyMutationInputObjectSchema } from './TenantUpdateManyMutationInput.schema';
import { TenantUncheckedUpdateManyWithoutTypeInputObjectSchema } from './TenantUncheckedUpdateManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateManyWithWhereWithoutTypeInput>;
export const TenantUpdateManyWithWhereWithoutTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantUpdateManyMutationInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateManyWithoutTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
