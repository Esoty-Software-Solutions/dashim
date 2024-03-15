/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricScalarWhereInputObjectSchema } from './FingerprintBiometricScalarWhereInput.schema';
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from './FingerprintBiometricUpdateManyMutationInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInput>;
export const FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => FingerprintBiometricUpdateManyMutationInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
