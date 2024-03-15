/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutMemberInputObjectSchema } from './TenantMemberUpdateWithoutMemberInput.schema';
import { TenantMemberUncheckedUpdateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutMemberInput>;
export const TenantMemberUpdateWithWhereUniqueWithoutMemberInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantMemberUpdateWithoutMemberInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedUpdateWithoutMemberInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
