/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateOrConnectWithoutEntryRecordsInput>;
export const FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
