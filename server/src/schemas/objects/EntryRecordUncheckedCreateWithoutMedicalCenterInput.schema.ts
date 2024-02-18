import { z } from 'zod';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateWithoutMedicalCenterInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      deactivationDate: z.coerce.date().optional().nullable(),
      isValidated: z.boolean(),
      isManuallyInserted: z.boolean().optional(),
      beneficiaryId: z.string(),
      fingerprintId: z.string().optional().nullable(),
      idCardId: z.string().optional().nullable(),
      faceId: z.string().optional().nullable(),
      voiceId: z.string().optional().nullable(),
      beneficiaryServices: z
        .lazy(
          () =>
            BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema =
  Schema;
