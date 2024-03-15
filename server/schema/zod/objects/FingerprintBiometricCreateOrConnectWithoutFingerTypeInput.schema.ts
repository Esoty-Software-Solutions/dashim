/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateOrConnectWithoutFingerTypeInput>;
export const FingerprintBiometricCreateOrConnectWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
