import { z } from 'zod';
import { EntryRecordCreateWithoutCreatedByInputObjectSchema } from './EntryRecordCreateWithoutCreatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutCreatedByInput.schema';
import { EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema } from './EntryRecordCreateOrConnectWithoutCreatedByInput.schema';
import { EntryRecordCreateManyCreatedByInputEnvelopeObjectSchema } from './EntryRecordCreateManyCreatedByInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedManyWithoutCreatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutCreatedByInputObjectSchema),
          z
            .lazy(() => EntryRecordCreateWithoutCreatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyCreatedByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
