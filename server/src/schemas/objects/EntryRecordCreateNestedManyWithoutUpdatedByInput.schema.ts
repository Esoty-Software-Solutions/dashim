import { z } from 'zod';
import { EntryRecordCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutUpdatedByInput.schema';
import { EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateOrConnectWithoutUpdatedByInput.schema';
import { EntryRecordCreateManyUpdatedByInputEnvelopeObjectSchema } from './EntryRecordCreateManyUpdatedByInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedManyWithoutUpdatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutUpdatedByInputObjectSchema),
          z
            .lazy(() => EntryRecordCreateWithoutUpdatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyUpdatedByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordCreateNestedManyWithoutUpdatedByInputObjectSchema =
  Schema;
