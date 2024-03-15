/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpdateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput>;
export const FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
