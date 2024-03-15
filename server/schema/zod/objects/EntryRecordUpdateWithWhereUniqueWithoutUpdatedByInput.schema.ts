/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutUpdatedByInputObjectSchema } from './EntryRecordUpdateWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
