/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateOrConnectWithoutBeneficiaryInput.schema';
import { VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema } from './VoiceBiometricCreateManyBeneficiaryInputEnvelope.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { VoiceBiometricScalarWhereInputObjectSchema } from './VoiceBiometricScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput>;
export const VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => VoiceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
                z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => VoiceBiometricScalarWhereInputObjectSchema),
                z.lazy(() => VoiceBiometricScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
