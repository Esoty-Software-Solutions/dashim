import { z } from 'zod';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';
import { GenderEnumCreateOrConnectWithoutUserInputObjectSchema } from './GenderEnumCreateOrConnectWithoutUserInput.schema';
import { GenderEnumUpsertWithoutUserInputObjectSchema } from './GenderEnumUpsertWithoutUserInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';
import { GenderEnumUpdateWithoutUserInputObjectSchema } from './GenderEnumUpdateWithoutUserInput.schema';
import { GenderEnumUncheckedUpdateWithoutUserInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumUpdateOneRequiredWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GenderEnumCreateWithoutUserInputObjectSchema),
          z.lazy(() => GenderEnumUncheckedCreateWithoutUserInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GenderEnumCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => GenderEnumUpsertWithoutUserInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GenderEnumUpdateWithoutUserInputObjectSchema),
          z.lazy(() => GenderEnumUncheckedUpdateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const GenderEnumUpdateOneRequiredWithoutUserNestedInputObjectSchema =
  Schema;
