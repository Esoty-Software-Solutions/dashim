/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutCreatedByInputObjectSchema } from './EntryRecordUpdateWithoutCreatedByInput.schema';
import { EntryRecordUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutCreatedByInput.schema';
import { EntryRecordCreateWithoutCreatedByInputObjectSchema } from './EntryRecordCreateWithoutCreatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutCreatedByInput>;
export const EntryRecordUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
