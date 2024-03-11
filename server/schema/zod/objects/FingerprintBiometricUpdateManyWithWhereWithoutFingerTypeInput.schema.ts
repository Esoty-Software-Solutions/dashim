/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricScalarWhereInputObjectSchema } from './FingerprintBiometricScalarWhereInput.schema';
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from './FingerprintBiometricUpdateManyMutationInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInput>;
export const FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => FingerprintBiometricUpdateManyMutationInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateManyWithoutFingerTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
