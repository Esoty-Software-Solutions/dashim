import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUncheckedCreateWithoutMedicalReviewStatusInput> =
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
      name: z.string(),
      Note: z.string().optional().nullable(),
      isWorkInjury: z.boolean().optional(),
      isExamination: z.boolean().optional(),
      groupCode: z.string(),
      billedAmmount: z.number(),
      allowedAmmount: z.number(),
      copayAmmount: z.number(),
      cashAmount: z.number(),
      coveredAmount: z.number(),
      defferedAmount: z.number(),
      coinsuranceAmount: z.number(),
      entryRecordId: z.string(),
      transactionReviewStatusId: z.string(),
      medicalServiceId: z.string(),
    })
    .strict();

export const PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
