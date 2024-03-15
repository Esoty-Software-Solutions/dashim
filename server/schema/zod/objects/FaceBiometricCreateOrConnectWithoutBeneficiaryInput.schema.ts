/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricCreateOrConnectWithoutBeneficiaryInput>;
export const FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
