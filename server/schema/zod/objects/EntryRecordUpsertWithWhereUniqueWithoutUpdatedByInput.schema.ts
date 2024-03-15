/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutUpdatedByInputObjectSchema } from './EntryRecordUpdateWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutUpdatedByInput.schema';
import { EntryRecordCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const EntryRecordUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
