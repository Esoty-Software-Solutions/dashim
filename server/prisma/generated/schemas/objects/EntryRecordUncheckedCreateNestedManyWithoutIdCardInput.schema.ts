import { z } from 'zod';
import { EntryRecordCreateWithoutIdCardInputObjectSchema } from './EntryRecordCreateWithoutIdCardInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardInput.schema';
import { EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema } from './EntryRecordCreateOrConnectWithoutIdCardInput.schema';
import { EntryRecordCreateManyIdCardInputEnvelopeObjectSchema } from './EntryRecordCreateManyIdCardInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateNestedManyWithoutIdCardInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutIdCardInputObjectSchema),
          z.lazy(() => EntryRecordCreateWithoutIdCardInputObjectSchema).array(),
          z.lazy(
            () => EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordUncheckedCreateWithoutIdCardInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateOrConnectWithoutIdCardInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyIdCardInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateNestedManyWithoutIdCardInputObjectSchema =
  Schema;
