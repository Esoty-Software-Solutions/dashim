/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutMemberInputObjectSchema } from './TenantMemberCreateWithoutMemberInput.schema';
import { TenantMemberUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutMemberInput>;
export const TenantMemberCreateOrConnectWithoutMemberInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantMemberCreateWithoutMemberInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedCreateWithoutMemberInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
