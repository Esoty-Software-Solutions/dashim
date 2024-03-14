/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutCreatedByInputObjectSchema } from './EntryRecordCreateWithoutCreatedByInput.schema';
import { EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema } from './EntryRecordUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutCreatedByInput>;
export const EntryRecordCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
