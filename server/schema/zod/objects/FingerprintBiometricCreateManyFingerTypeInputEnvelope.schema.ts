/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricCreateManyFingerTypeInputObjectSchema } from './FingerprintBiometricCreateManyFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateManyFingerTypeInputEnvelope>;
export const FingerprintBiometricCreateManyFingerTypeInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => FingerprintBiometricCreateManyFingerTypeInputObjectSchema),
            z.lazy(() => FingerprintBiometricCreateManyFingerTypeInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
