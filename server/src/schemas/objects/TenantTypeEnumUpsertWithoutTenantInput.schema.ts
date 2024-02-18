import { z } from 'zod';
import { TenantTypeEnumUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUpdateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedUpdateWithoutTenantInput.schema';
import { TenantTypeEnumCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeEnumUpsertWithoutTenantInput> = z
  .object({
    update: z.union([
      z.lazy(() => TenantTypeEnumUpdateWithoutTenantInputObjectSchema),
      z.lazy(() => TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantTypeEnumCreateWithoutTenantInputObjectSchema),
      z.lazy(() => TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const TenantTypeEnumUpsertWithoutTenantInputObjectSchema = Schema;
