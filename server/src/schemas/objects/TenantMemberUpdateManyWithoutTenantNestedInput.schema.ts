import { z } from 'zod';
import { TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';
import { TenantMemberCreateOrConnectWithoutTenantInputObjectSchema } from './TenantMemberCreateOrConnectWithoutTenantInput.schema';
import { TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantMemberUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TenantMemberCreateManyTenantInputEnvelopeObjectSchema } from './TenantMemberCreateManyTenantInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TenantMemberUpdateManyWithWhereWithoutTenantInput.schema';
import { TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberUpdateManyWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema),
          z
            .lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema)
            .array(),
          z.lazy(
            () => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TenantMemberCreateOrConnectWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TenantMemberCreateOrConnectWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TenantMemberCreateManyTenantInputEnvelopeObjectSchema)
        .optional(),
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
          z.lazy(
            () =>
              TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
          z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantMemberUpdateManyWithoutTenantNestedInputObjectSchema =
  Schema;
