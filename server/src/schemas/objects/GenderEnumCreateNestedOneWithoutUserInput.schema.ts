import { z } from 'zod';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';
import { GenderEnumCreateOrConnectWithoutUserInputObjectSchema } from './GenderEnumCreateOrConnectWithoutUserInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumCreateNestedOneWithoutUserInput> = z
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
    connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const GenderEnumCreateNestedOneWithoutUserInputObjectSchema = Schema;
