/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpdateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput>;
export const VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
