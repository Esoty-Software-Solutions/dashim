/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FaceBiometricUpsertWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpsertWithoutEntryRecordsInput.schema';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpdateToOneWithWhereWithoutEntryRecordsInput.schema';
import { FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUpdateOneWithoutEntryRecordsNestedInput>;
export const FaceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        upsert: z.lazy(() => FaceBiometricUpsertWithoutEntryRecordsInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => FaceBiometricWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => FaceBiometricWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => FaceBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
