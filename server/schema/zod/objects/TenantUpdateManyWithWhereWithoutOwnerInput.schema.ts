/* eslint-disable */
import { z } from 'zod';
import { TenantScalarWhereInputObjectSchema } from './TenantScalarWhereInput.schema';
import { TenantUpdateManyMutationInputObjectSchema } from './TenantUpdateManyMutationInput.schema';
import { TenantUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './TenantUncheckedUpdateManyWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateManyWithWhereWithoutOwnerInput>;
export const TenantUpdateManyWithWhereWithoutOwnerInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantUpdateManyMutationInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateManyWithoutOwnerInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
