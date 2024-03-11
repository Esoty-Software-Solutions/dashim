/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutCreatedByInputObjectSchema } from './EntryRecordCreateWithoutCreatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutCreatedByInput.schema';
import { EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema } from './EntryRecordCreateOrConnectWithoutCreatedByInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { EntryRecordCreateManyCreatedByInputEnvelopeObjectSchema } from './EntryRecordCreateManyCreatedByInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutCreatedByInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithoutCreatedByNestedInput>;
export const EntryRecordUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => EntryRecordCreateWithoutCreatedByInputObjectSchema).array(),
                z.lazy(() => EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema),
                z.lazy(() => EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => EntryRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => EntryRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => EntryRecordCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => EntryRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => EntryRecordUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => EntryRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
                z.lazy(() => EntryRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
                z.lazy(() => EntryRecordScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
