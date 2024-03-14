/* eslint-disable */
import { z } from 'zod';
import { TenantMemberCreateWithoutMemberInputObjectSchema } from './TenantMemberCreateWithoutMemberInput.schema';
import { TenantMemberUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedCreateWithoutMemberInput.schema';
import { TenantMemberCreateOrConnectWithoutMemberInputObjectSchema } from './TenantMemberCreateOrConnectWithoutMemberInput.schema';
import { TenantMemberCreateManyMemberInputEnvelopeObjectSchema } from './TenantMemberCreateManyMemberInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUncheckedCreateNestedManyWithoutMemberInput>;
export const TenantMemberUncheckedCreateNestedManyWithoutMemberInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => TenantMemberCreateWithoutMemberInputObjectSchema),
                z.lazy(() => TenantMemberCreateWithoutMemberInputObjectSchema).array(),
                z.lazy(() => TenantMemberUncheckedCreateWithoutMemberInputObjectSchema),
                z.lazy(() => TenantMemberUncheckedCreateWithoutMemberInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => TenantMemberCreateOrConnectWithoutMemberInputObjectSchema),
                z.lazy(() => TenantMemberCreateOrConnectWithoutMemberInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => TenantMemberCreateManyMemberInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
