/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpdateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutFingerTypeInput.schema';
import { FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInput>;
export const FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
