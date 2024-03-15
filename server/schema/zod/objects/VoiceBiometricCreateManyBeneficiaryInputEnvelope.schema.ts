/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricCreateManyBeneficiaryInputObjectSchema } from './VoiceBiometricCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricCreateManyBeneficiaryInputEnvelope>;
export const VoiceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => VoiceBiometricCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => VoiceBiometricCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
