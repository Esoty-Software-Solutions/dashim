/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordCreateWithoutUpdatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutUpdatedByInput>;
export const EntryRecordCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
