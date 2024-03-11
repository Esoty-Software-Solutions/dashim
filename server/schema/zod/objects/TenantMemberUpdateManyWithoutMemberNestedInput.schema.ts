/* eslint-disable */
import { z } from 'zod';
import { TenantMemberCreateWithoutMemberInputObjectSchema } from './TenantMemberCreateWithoutMemberInput.schema';
import { TenantMemberUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedCreateWithoutMemberInput.schema';
import { TenantMemberCreateOrConnectWithoutMemberInputObjectSchema } from './TenantMemberCreateOrConnectWithoutMemberInput.schema';
import { TenantMemberUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './TenantMemberUpsertWithWhereUniqueWithoutMemberInput.schema';
import { TenantMemberCreateManyMemberInputEnvelopeObjectSchema } from './TenantMemberCreateManyMemberInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './TenantMemberUpdateWithWhereUniqueWithoutMemberInput.schema';
import { TenantMemberUpdateManyWithWhereWithoutMemberInputObjectSchema } from './TenantMemberUpdateManyWithWhereWithoutMemberInput.schema';
import { TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpdateManyWithoutMemberNestedInput>;
export const TenantMemberUpdateManyWithoutMemberNestedInputObjectSchema: SchemaType = z
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
        upsert: z
            .union([
                z.lazy(() => TenantMemberUpsertWithWhereUniqueWithoutMemberInputObjectSchema),
                z.lazy(() => TenantMemberUpsertWithWhereUniqueWithoutMemberInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => TenantMemberCreateManyMemberInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
                z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => TenantMemberUpdateWithWhereUniqueWithoutMemberInputObjectSchema),
                z.lazy(() => TenantMemberUpdateWithWhereUniqueWithoutMemberInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => TenantMemberUpdateManyWithWhereWithoutMemberInputObjectSchema),
                z.lazy(() => TenantMemberUpdateManyWithWhereWithoutMemberInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
                z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
