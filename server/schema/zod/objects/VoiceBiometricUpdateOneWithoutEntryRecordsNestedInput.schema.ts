/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { VoiceBiometricUpsertWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpsertWithoutEntryRecordsInput.schema';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpdateToOneWithWhereWithoutEntryRecordsInput.schema';
import { VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUpdateOneWithoutEntryRecordsNestedInput>;
export const VoiceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        upsert: z.lazy(() => VoiceBiometricUpsertWithoutEntryRecordsInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => VoiceBiometricWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => VoiceBiometricWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => VoiceBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
