/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricCreateOrConnectWithoutEntryRecordsInput>;
export const VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
