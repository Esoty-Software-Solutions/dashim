/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateNestedOneWithoutEntryRecordsInput>;
export const FingerprintBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema)
            .optional(),
        connect: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
