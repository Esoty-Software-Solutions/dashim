/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateOrConnectWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema } from './FaceBiometricCreateManyBeneficiaryInputEnvelope.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput>;
export const FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => FaceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
                z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
