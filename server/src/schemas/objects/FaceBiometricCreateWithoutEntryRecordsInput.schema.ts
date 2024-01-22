import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutFaceInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCreateWithoutEntryRecordsInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    hash: z.string(),
    beneficiary: z.lazy(
      () => BeneficiaryCreateNestedOneWithoutFaceInputObjectSchema,
    ),
  })
  .strict();

export const FaceBiometricCreateWithoutEntryRecordsInputObjectSchema = Schema;
