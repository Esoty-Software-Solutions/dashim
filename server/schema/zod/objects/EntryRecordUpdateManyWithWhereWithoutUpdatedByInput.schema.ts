/* eslint-disable */
import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutUpdatedByInput>;
export const EntryRecordUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateManyWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
