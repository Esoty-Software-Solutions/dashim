/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricCreateManyBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateManyBeneficiaryInputEnvelope>;
export const FingerprintBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => FingerprintBiometricCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => FingerprintBiometricCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
