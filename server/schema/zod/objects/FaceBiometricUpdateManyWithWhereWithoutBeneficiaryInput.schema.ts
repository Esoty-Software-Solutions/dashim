/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricScalarWhereInputObjectSchema } from './FaceBiometricScalarWhereInput.schema';
import { FaceBiometricUpdateManyMutationInputObjectSchema } from './FaceBiometricUpdateManyMutationInput.schema';
import { FaceBiometricUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInput>;
export const FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FaceBiometricScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => FaceBiometricUpdateManyMutationInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
