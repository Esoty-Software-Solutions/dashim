/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ReviewStatusArgsObjectSchema } from './ReviewStatusArgs.schema';
import { EntryRecordArgsObjectSchema } from './EntryRecordArgs.schema';
import { MedicalServiceArgsObjectSchema } from './MedicalServiceArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceSelect>;
export const BeneficiaryServiceSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        createdById: z.boolean().optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        updatedById: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        name: z.boolean().optional(),
        Note: z.boolean().optional(),
        billedAmmount: z.boolean().optional(),
        allowedAmmount: z.boolean().optional(),
        copayAmmount: z.boolean().optional(),
        cashAmount: z.boolean().optional(),
        coveredAmount: z.boolean().optional(),
        defferedAmount: z.boolean().optional(),
        coinsuranceAmount: z.boolean().optional(),
        notes: z.boolean().optional(),
        isExamination: z.boolean().optional(),
        groupId: z.boolean().optional(),
        reviewStatus: z.union([z.boolean(), z.lazy(() => ReviewStatusArgsObjectSchema)]).optional(),
        reviewStatusId: z.boolean().optional(),
        entryRecord: z.union([z.boolean(), z.lazy(() => EntryRecordArgsObjectSchema)]).optional(),
        entryRecordId: z.boolean().optional(),
        medicalService: z.union([z.boolean(), z.lazy(() => MedicalServiceArgsObjectSchema)]).optional(),
        medicalServiceId: z.boolean().optional(),
    })
    .strict() as SchemaType;
