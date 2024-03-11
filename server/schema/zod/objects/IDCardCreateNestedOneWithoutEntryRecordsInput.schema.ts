/* eslint-disable */
import { z } from 'zod';
import { IDCardCreateWithoutEntryRecordsInputObjectSchema } from './IDCardCreateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedCreateWithoutEntryRecordsInput.schema';
import { IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './IDCardCreateOrConnectWithoutEntryRecordsInput.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardCreateNestedOneWithoutEntryRecordsInput>;
export const IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => IDCardCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        connect: z.lazy(() => IDCardWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
