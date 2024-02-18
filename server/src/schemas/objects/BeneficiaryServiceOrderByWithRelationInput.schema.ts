import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ReviewStatusOrderByWithRelationInputObjectSchema } from './ReviewStatusOrderByWithRelationInput.schema';
import { EntryRecordOrderByWithRelationInputObjectSchema } from './EntryRecordOrderByWithRelationInput.schema';
import { MedicalServiceOrderByWithRelationInputObjectSchema } from './MedicalServiceOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    updatedById: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    deactivationDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    Note: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    billedAmmount: z.lazy(() => SortOrderSchema).optional(),
    allowedAmmount: z.lazy(() => SortOrderSchema).optional(),
    copayAmmount: z.lazy(() => SortOrderSchema).optional(),
    cashAmount: z.lazy(() => SortOrderSchema).optional(),
    coveredAmount: z.lazy(() => SortOrderSchema).optional(),
    defferedAmount: z.lazy(() => SortOrderSchema).optional(),
    coinsuranceAmount: z.lazy(() => SortOrderSchema).optional(),
    notes: z.lazy(() => SortOrderSchema).optional(),
    isExamination: z.lazy(() => SortOrderSchema).optional(),
    groupId: z.lazy(() => SortOrderSchema).optional(),
    reviewStatusId: z.lazy(() => SortOrderSchema).optional(),
    entryRecordId: z.lazy(() => SortOrderSchema).optional(),
    medicalServiceId: z.lazy(() => SortOrderSchema).optional(),
    CreatedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    UpdatedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    reviewStatus: z
      .lazy(() => ReviewStatusOrderByWithRelationInputObjectSchema)
      .optional(),
    entryRecord: z
      .lazy(() => EntryRecordOrderByWithRelationInputObjectSchema)
      .optional(),
    medicalService: z
      .lazy(() => MedicalServiceOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryServiceOrderByWithRelationInputObjectSchema = Schema;
