/* eslint-disable */
import { z } from 'zod';
import { IDCardCreateWithoutEntryRecordsInputObjectSchema } from './IDCardCreateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedCreateWithoutEntryRecordsInput.schema';
import { IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './IDCardCreateOrConnectWithoutEntryRecordsInput.schema';
import { IDCardUpsertWithoutEntryRecordsInputObjectSchema } from './IDCardUpsertWithoutEntryRecordsInput.schema';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema } from './IDCardUpdateToOneWithWhereWithoutEntryRecordsInput.schema';
import { IDCardUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUpdateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUpdateOneWithoutEntryRecordsNestedInput>;
export const IDCardUpdateOneWithoutEntryRecordsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => IDCardCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => IDCardCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        upsert: z.lazy(() => IDCardUpsertWithoutEntryRecordsInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => IDCardWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => IDCardWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => IDCardWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => IDCardUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => IDCardUpdateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
