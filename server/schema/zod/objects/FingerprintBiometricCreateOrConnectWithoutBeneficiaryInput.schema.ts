/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateOrConnectWithoutBeneficiaryInput>;
export const FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
