import { z } from 'zod';
import { FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUpdateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedUpdateWithoutFingerTypeInput.schema';
import { FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeEnumUpsertWithoutFingerTypeInput> = z
  .object({
    update: z.union([
      z.lazy(() => FingerTypeEnumUpdateWithoutFingerTypeInputObjectSchema),
      z.lazy(
        () => FingerTypeEnumUncheckedUpdateWithoutFingerTypeInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema),
      z.lazy(
        () => FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const FingerTypeEnumUpsertWithoutFingerTypeInputObjectSchema = Schema;
