/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpdateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInput>;
export const FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
