import { z } from 'zod';
import { FingerTypeEnumWhereUniqueInputObjectSchema } from './FingerTypeEnumWhereUniqueInput.schema';
import { FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumCreateWithoutFingerTypeInput.schema';
import { FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeEnumUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeEnumCreateOrConnectWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerTypeEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FingerTypeEnumCreateWithoutFingerTypeInputObjectSchema),
        z.lazy(
          () => FingerTypeEnumUncheckedCreateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerTypeEnumCreateOrConnectWithoutFingerTypeInputObjectSchema =
  Schema;
