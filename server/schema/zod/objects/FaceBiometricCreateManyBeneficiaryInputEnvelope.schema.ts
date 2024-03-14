/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricCreateManyBeneficiaryInputObjectSchema } from './FaceBiometricCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricCreateManyBeneficiaryInputEnvelope>;
export const FaceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => FaceBiometricCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => FaceBiometricCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
