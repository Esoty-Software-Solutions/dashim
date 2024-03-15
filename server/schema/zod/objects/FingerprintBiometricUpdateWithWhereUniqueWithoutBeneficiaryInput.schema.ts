/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUpdateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput>;
export const FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => FingerprintBiometricUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
