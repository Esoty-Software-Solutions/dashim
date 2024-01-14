import { z } from 'zod';
import { ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInput.schema';
import { ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInput.schema';
import { PackageMedicalServicesCreateNestedOneWithoutPatientServicesInputObjectSchema } from './PackageMedicalServicesCreateNestedOneWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateWithoutEntryRecordInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    Note: z.string().optional().nullable(),
    isWorkInjury: z.boolean().optional(),
    isExamination: z.boolean().optional(),
    billedAmmount: z.number(),
    allowedAmmount: z.number(),
    copayAmmount: z.number(),
    cashAmount: z.number(),
    coveredAmount: z.number(),
    defferedAmount: z.number(),
    coinsuranceAmount: z.number(),
    groupCode: z.string(),
    transactionReviewStatus: z.lazy(
      () =>
        ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema,
    ),
    medicalReviewStatus: z.lazy(
      () =>
        ReviewStatusCreateNestedOneWithoutMedicalPatientServicesInputObjectSchema,
    ),
    service: z.lazy(
      () =>
        PackageMedicalServicesCreateNestedOneWithoutPatientServicesInputObjectSchema,
    ),
  })
  .strict();

export const PatientServiceCreateWithoutEntryRecordInputObjectSchema = Schema;
