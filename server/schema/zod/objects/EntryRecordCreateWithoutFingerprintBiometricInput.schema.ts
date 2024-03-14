/* eslint-disable */
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserCreateNestedOneWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateNestedOneWithoutEntryRecordServiceCreationsInput.schema';
import { UserCreateNestedOneWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutEntryRecordServiceUpdatesInput.schema';
import { BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutEntryRecordsInput.schema';
import { IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './IDCardCreateNestedOneWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutEntryRecordsInput.schema';
import { BeneficiaryServiceCreateNestedManyWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateNestedManyWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())]),
);

type SchemaType = z.ZodType<Prisma.EntryRecordCreateWithoutFingerprintBiometricInput>;
export const EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        isValidated: z.boolean(),
        isManuallyInserted: z.boolean().optional(),
        notes: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
        CreatedBy: z.lazy(() => UserCreateNestedOneWithoutEntryRecordServiceCreationsInputObjectSchema),
        UpdatedBy: z.lazy(() => UserCreateNestedOneWithoutEntryRecordServiceUpdatesInputObjectSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema),
        idCardBiometric: z.lazy(() => IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema).optional(),
        faceBiometric: z.lazy(() => FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema).optional(),
        voiceBiometric: z.lazy(() => VoiceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema).optional(),
        medicalCenter: z.lazy(() => MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema),
        beneficiaryServices: z
            .lazy(() => BeneficiaryServiceCreateNestedManyWithoutEntryRecordInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
