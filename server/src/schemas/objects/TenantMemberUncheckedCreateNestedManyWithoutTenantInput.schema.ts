import { z } from 'zod';
import { TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';
import { TenantMemberCreateOrConnectWithoutTenantInputObjectSchema } from './TenantMemberCreateOrConnectWithoutTenantInput.schema';
import { TenantMemberCreateManyTenantInputEnvelopeObjectSchema } from './TenantMemberCreateManyTenantInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberUncheckedCreateNestedManyWithoutTenantInput> =
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
      createMany: z
        .lazy(() => TenantMemberCreateManyTenantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema =
  Schema;
