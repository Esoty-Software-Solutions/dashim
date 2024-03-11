/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    firstName: z.string(),
    secondName: z.string().nullish(),
    thirdName: z.string().nullish(),
    fourthName: z.string().nullish(),
    lastName: z.string(),
    searchName: z.string(),
    birthDate: z.date(),
    genderId: z.string(),
    nationality: z.string().nullish(),
    nationalID: z.string().nullish(),
    isActive: z.boolean(),
    deactivationReason: z.string().nullish(),
    deactivationDate: z.date().nullish(),
    statusSetById: z.string(),
    legacyCode: z.string().nullish(),
});
const allRelationSchema = z.object({
    gender: z.record(z.unknown()).optional(),
    StatusSetBy: z.record(z.unknown()).optional(),
    beneficiaryEntity: z.record(z.unknown()).optional(),
    relationship: z.record(z.unknown()).optional(),
    fingerprint: z.array(z.unknown()).optional(),
    idCard: z.array(z.unknown()).optional(),
    face: z.array(z.unknown()).optional(),
    voice: z.array(z.unknown()).optional(),
    entryRecords: z.array(z.unknown()).optional(),
    beneficiaryBalances: z.array(z.unknown()).optional(),
    futureStatus: z.array(z.unknown()).optional(),
    beneficiaryEntityId: z.string(),
    relationshipId: z.string(),
});
const safeRelationSchema = z.object({
    gender: z.record(z.unknown()),
    StatusSetBy: z.record(z.unknown()),
    beneficiaryEntity: z.record(z.unknown()),
    relationship: z.record(z.unknown()),
    fingerprint: z.record(z.unknown()).optional(),
    idCard: z.record(z.unknown()).optional(),
    face: z.record(z.unknown()).optional(),
    voice: z.record(z.unknown()).optional(),
    entryRecords: z.record(z.unknown()).optional(),
    beneficiaryBalances: z.record(z.unknown()).optional(),
    futureStatus: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    beneficiaryEntityId: z.string(),
    relationshipId: z.string(),
    fingerprint: z.record(z.unknown()).optional(),
    idCard: z.record(z.unknown()).optional(),
    face: z.record(z.unknown()).optional(),
    voice: z.record(z.unknown()).optional(),
    entryRecords: z.record(z.unknown()).optional(),
    beneficiaryBalances: z.record(z.unknown()).optional(),
    futureStatus: z.record(z.unknown()).optional(),
});
export const BeneficiaryScalarSchema = baseSchema;
export const BeneficiarySchema = BeneficiaryScalarSchema.merge(allRelationSchema);
export const BeneficiaryCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
});
export const BeneficiaryCreateSchema = z.union([
    BeneficiaryCreateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const BeneficiaryUpdateScalarSchema = baseSchema.partial();
export const BeneficiaryUpdateSchema = z.union([
    BeneficiaryUpdateScalarSchema.merge(safeRelationSchema.partial()),
    BeneficiaryUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
