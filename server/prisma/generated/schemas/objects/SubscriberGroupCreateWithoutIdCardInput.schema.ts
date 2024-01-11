import { z } from 'zod';
import { GenderCreateNestedOneWithoutSubscriberGroupInputObjectSchema } from './GenderCreateNestedOneWithoutSubscriberGroupInput.schema';
import { SubscriberCreateNestedOneWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateNestedOneWithoutSubscriberGroupInput.schema';
import { RelationshipCreateNestedOneWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateNestedOneWithoutSubscriberGroupInput.schema';
import { FingerprintCreateNestedManyWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateNestedManyWithoutSubscriberGroupInput.schema';
import { FaceCreateNestedManyWithoutSubscriberGroupInputObjectSchema } from './FaceCreateNestedManyWithoutSubscriberGroupInput.schema';
import { VoiceCreateNestedManyWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateNestedManyWithoutSubscriberGroupInput.schema';
import { EntryRecordCreateNestedManyWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateNestedManyWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceCreateNestedManyWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateNestedManyWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateWithoutIdCardInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    firstName: z.string(),
    secondName: z.string().optional().nullable(),
    thirdName: z.string().optional().nullable(),
    fourthName: z.string().optional().nullable(),
    lastName: z.string(),
    searchName: z.string(),
    birthDate: z.coerce.date(),
    nationality: z.string().optional().nullable(),
    nationalID: z.string().optional().nullable(),
    residence: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    legacyCode: z.string().optional().nullable(),
    isFingerprintVerificationActive: z.boolean().optional(),
    isIdCardVerificationActive: z.boolean().optional(),
    isFaceVerificationActive: z.boolean().optional(),
    isVoiceVerificationActive: z.boolean().optional(),
    gender: z
      .lazy(() => GenderCreateNestedOneWithoutSubscriberGroupInputObjectSchema)
      .optional(),
    subscriber: z.lazy(
      () => SubscriberCreateNestedOneWithoutSubscriberGroupInputObjectSchema,
    ),
    relationship: z.lazy(
      () => RelationshipCreateNestedOneWithoutSubscriberGroupInputObjectSchema,
    ),
    fingerprint: z
      .lazy(
        () =>
          FingerprintCreateNestedManyWithoutSubscriberGroupInputObjectSchema,
      )
      .optional(),
    face: z
      .lazy(() => FaceCreateNestedManyWithoutSubscriberGroupInputObjectSchema)
      .optional(),
    voice: z
      .lazy(() => VoiceCreateNestedManyWithoutSubscriberGroupInputObjectSchema)
      .optional(),
    entryRecords: z
      .lazy(
        () =>
          EntryRecordCreateNestedManyWithoutSubscriberGroupInputObjectSchema,
      )
      .optional(),
    spents: z
      .lazy(
        () =>
          SubscriberGroupBalanceCreateNestedManyWithoutSubscriberGroupInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberGroupCreateWithoutIdCardInputObjectSchema = Schema;
