/* eslint-disable */
import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutCreatedByInput>;
export const EntryRecordUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateManyWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
