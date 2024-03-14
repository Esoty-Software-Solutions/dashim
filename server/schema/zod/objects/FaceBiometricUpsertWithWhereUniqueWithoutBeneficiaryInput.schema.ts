/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpdateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput>;
export const FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
