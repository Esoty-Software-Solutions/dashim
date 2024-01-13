import { z } from 'zod';
import { EntryRecordCreateNestedOneWithoutPatientExaminationInputObjectSchema } from './EntryRecordCreateNestedOneWithoutPatientExaminationInput.schema';
import { ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInput.schema';
import { ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInputObjectSchema } from './ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInput.schema';
import { PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInputObjectSchema } from './PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateWithoutPatientServicesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      Note: z.string().optional().nullable(),
      isWorkInjury: z.boolean().optional(),
      name: z.string(),
      cash: z.number(),
      limit: z.number(),
      deffered: z.number(),
      groupId: z.string(),
      entryRecord: z.lazy(
        () =>
          EntryRecordCreateNestedOneWithoutPatientExaminationInputObjectSchema,
      ),
      transactionReviewStatus: z.lazy(
        () =>
          ReviewStatusCreateNestedOneWithoutTransactionPatientExaminationInputObjectSchema,
      ),
      medicalReviewStatus: z.lazy(
        () =>
          ReviewStatusCreateNestedOneWithoutMedicalPatientExaminationInputObjectSchema,
      ),
      service: z.lazy(
        () =>
          PackageMedicalServicesCreateNestedOneWithoutPatientExaminationsInputObjectSchema,
      ),
    })
    .strict();

export const PatientExaminationCreateWithoutPatientServicesInputObjectSchema =
  Schema;
