/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    isActive: z.boolean(),
    deactivationReason: z.string().nullish(),
    deactivationDate: z.date().nullish(),
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
    username: z.string(),
    email: z.string().email(),
    isEmailVerificationActive: z.boolean(),
    phone: z.string().nullish(),
    isPhoneVerified: z.boolean(),
    passwordHash: z.string(),
    avatar: z.string().nullish(),
});
const allRelationSchema = z.object({
    gender: z.record(z.unknown()).optional(),
    deviceToken: z.array(z.unknown()).optional(),
    ownerOf: z.array(z.unknown()).optional(),
    memberOf: z.array(z.unknown()).optional(),
    beneficiaryEntityStatusChanges: z.array(z.unknown()).optional(),
    beneficiaryStatusChanges: z.array(z.unknown()).optional(),
    beneficiaryEntityFutureStatusCreations: z.array(z.unknown()).optional(),
    beneficiaryEntityFutureStatusUpdates: z.array(z.unknown()).optional(),
    beneficiaryFutureStatusCreations: z.array(z.unknown()).optional(),
    beneficiaryFutureStatusUpdates: z.array(z.unknown()).optional(),
    ReviewStatusCreations: z.array(z.unknown()).optional(),
    ReviewStatusUpdates: z.array(z.unknown()).optional(),
    BeneficiaryServiceCreations: z.array(z.unknown()).optional(),
    BeneficiaryServiceUpdates: z.array(z.unknown()).optional(),
    EntryRecordServiceCreations: z.array(z.unknown()).optional(),
    EntryRecordServiceUpdates: z.array(z.unknown()).optional(),
});
const safeRelationSchema = z.object({
    gender: z.record(z.unknown()),
    deviceToken: z.record(z.unknown()).optional(),
    ownerOf: z.record(z.unknown()).optional(),
    memberOf: z.record(z.unknown()).optional(),
    beneficiaryEntityStatusChanges: z.record(z.unknown()).optional(),
    beneficiaryStatusChanges: z.record(z.unknown()).optional(),
    beneficiaryEntityFutureStatusCreations: z.record(z.unknown()).optional(),
    beneficiaryEntityFutureStatusUpdates: z.record(z.unknown()).optional(),
    beneficiaryFutureStatusCreations: z.record(z.unknown()).optional(),
    beneficiaryFutureStatusUpdates: z.record(z.unknown()).optional(),
    ReviewStatusCreations: z.record(z.unknown()).optional(),
    ReviewStatusUpdates: z.record(z.unknown()).optional(),
    BeneficiaryServiceCreations: z.record(z.unknown()).optional(),
    BeneficiaryServiceUpdates: z.record(z.unknown()).optional(),
    EntryRecordServiceCreations: z.record(z.unknown()).optional(),
    EntryRecordServiceUpdates: z.record(z.unknown()).optional(),
});
const unsafeRelationSchema = z.object({
    deviceToken: z.record(z.unknown()).optional(),
    ownerOf: z.record(z.unknown()).optional(),
    memberOf: z.record(z.unknown()).optional(),
    beneficiaryEntityStatusChanges: z.record(z.unknown()).optional(),
    beneficiaryStatusChanges: z.record(z.unknown()).optional(),
    beneficiaryEntityFutureStatusCreations: z.record(z.unknown()).optional(),
    beneficiaryEntityFutureStatusUpdates: z.record(z.unknown()).optional(),
    beneficiaryFutureStatusCreations: z.record(z.unknown()).optional(),
    beneficiaryFutureStatusUpdates: z.record(z.unknown()).optional(),
    ReviewStatusCreations: z.record(z.unknown()).optional(),
    ReviewStatusUpdates: z.record(z.unknown()).optional(),
    BeneficiaryServiceCreations: z.record(z.unknown()).optional(),
    BeneficiaryServiceUpdates: z.record(z.unknown()).optional(),
    EntryRecordServiceCreations: z.record(z.unknown()).optional(),
    EntryRecordServiceUpdates: z.record(z.unknown()).optional(),
});
export const UserScalarSchema = baseSchema.omit({
    passwordHash: true,
});
export const UserSchema = UserScalarSchema.merge(allRelationSchema);
export const UserCreateScalarSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
    isActive: true,
    isEmailVerificationActive: true,
    isPhoneVerified: true,
});
export const UserCreateSchema = z.union([
    UserCreateScalarSchema.merge(safeRelationSchema.partial()),
    UserCreateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
export const UserUpdateScalarSchema = baseSchema.partial();
export const UserUpdateSchema = z.union([
    UserUpdateScalarSchema.merge(safeRelationSchema.partial()),
    UserUpdateScalarSchema.merge(unsafeRelationSchema.partial()),
]);
