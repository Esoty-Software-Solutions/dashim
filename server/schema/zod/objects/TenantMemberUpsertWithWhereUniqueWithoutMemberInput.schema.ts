/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutMemberInputObjectSchema } from './TenantMemberUpdateWithoutMemberInput.schema';
import { TenantMemberUncheckedUpdateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutMemberInput.schema';
import { TenantMemberCreateWithoutMemberInputObjectSchema } from './TenantMemberCreateWithoutMemberInput.schema';
import { TenantMemberUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpsertWithWhereUniqueWithoutMemberInput>;
export const TenantMemberUpsertWithWhereUniqueWithoutMemberInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => TenantMemberUpdateWithoutMemberInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedUpdateWithoutMemberInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => TenantMemberCreateWithoutMemberInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedCreateWithoutMemberInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
