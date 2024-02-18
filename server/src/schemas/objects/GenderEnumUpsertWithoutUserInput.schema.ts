import { z } from 'zod';
import { GenderEnumUpdateWithoutUserInputObjectSchema } from './GenderEnumUpdateWithoutUserInput.schema';
import { GenderEnumUncheckedUpdateWithoutUserInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutUserInput.schema';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenderEnumUpdateWithoutUserInputObjectSchema),
      z.lazy(() => GenderEnumUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GenderEnumCreateWithoutUserInputObjectSchema),
      z.lazy(() => GenderEnumUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const GenderEnumUpsertWithoutUserInputObjectSchema = Schema;
