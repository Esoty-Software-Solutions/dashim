import { z } from 'zod';
import { DeviceTypeEnumWhereInputObjectSchema } from './DeviceTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeEnumRelationFilter> = z
  .object({
    is: z
      .lazy(() => DeviceTypeEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DeviceTypeEnumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DeviceTypeEnumRelationFilterObjectSchema = Schema;
