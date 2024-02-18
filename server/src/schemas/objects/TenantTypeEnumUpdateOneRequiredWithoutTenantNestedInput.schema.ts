import { z } from 'zod';
import { TenantTypeEnumCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedCreateWithoutTenantInput.schema';
import { TenantTypeEnumCreateOrConnectWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateOrConnectWithoutTenantInput.schema';
import { TenantTypeEnumUpsertWithoutTenantInputObjectSchema } from './TenantTypeEnumUpsertWithoutTenantInput.schema';
import { TenantTypeEnumWhereUniqueInputObjectSchema } from './TenantTypeEnumWhereUniqueInput.schema';
import { TenantTypeEnumUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUpdateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeEnumUpdateOneRequiredWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantTypeEnumCreateWithoutTenantInputObjectSchema),
          z.lazy(
            () => TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantTypeEnumCreateOrConnectWithoutTenantInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TenantTypeEnumUpsertWithoutTenantInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => TenantTypeEnumWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => TenantTypeEnumUpdateWithoutTenantInputObjectSchema),
          z.lazy(
            () => TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TenantTypeEnumUpdateOneRequiredWithoutTenantNestedInputObjectSchema =
  Schema;
