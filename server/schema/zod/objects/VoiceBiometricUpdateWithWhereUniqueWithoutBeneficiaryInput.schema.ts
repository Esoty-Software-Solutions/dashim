/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpdateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput>;
export const VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
