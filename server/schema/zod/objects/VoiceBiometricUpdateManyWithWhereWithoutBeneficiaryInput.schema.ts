/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricScalarWhereInputObjectSchema } from './VoiceBiometricScalarWhereInput.schema';
import { VoiceBiometricUpdateManyMutationInputObjectSchema } from './VoiceBiometricUpdateManyMutationInput.schema';
import { VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInput>;
export const VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => VoiceBiometricScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => VoiceBiometricUpdateManyMutationInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
