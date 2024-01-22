import { z } from 'zod';
import { EntryRecordCreateNestedOneWithoutPatientServicesInputObjectSchema } from './EntryRecordCreateNestedOneWithoutPatientServicesInput.schema';
import { ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInput.schema';
import { MedicalServiceCreateNestedOneWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateNestedOneWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateWithoutMedicalReviewStatusInput> =
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
      entryRecord: z.lazy(
        () => EntryRecordCreateNestedOneWithoutPatientServicesInputObjectSchema,
      ),
      transactionReviewStatus: z.lazy(
        () =>
          ReviewStatusCreateNestedOneWithoutTransactionPatientServicesInputObjectSchema,
      ),
      medicalService: z.lazy(
        () =>
          MedicalServiceCreateNestedOneWithoutPatientServicesInputObjectSchema,
      ),
    })
    .strict();

export const PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
