/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricCreateNestedOneWithoutEntryRecordsInput>;
export const VoiceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        connect: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
