/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricCreateOrConnectWithoutBeneficiaryInput>;
export const VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
