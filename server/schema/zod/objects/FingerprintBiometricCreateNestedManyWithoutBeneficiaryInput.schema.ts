/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema } from './FingerprintBiometricCreateManyBeneficiaryInputEnvelope.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCreateNestedManyWithoutBeneficiaryInput>;
export const FingerprintBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => FingerprintBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
                z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
