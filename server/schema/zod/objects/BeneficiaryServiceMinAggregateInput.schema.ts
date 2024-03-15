/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceMinAggregateInputType>;
export const BeneficiaryServiceMinAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        updatedAt: z.literal(true).optional(),
        isPublished: z.literal(true).optional(),
        isSoftDeleted: z.literal(true).optional(),
        createdById: z.literal(true).optional(),
        updatedById: z.literal(true).optional(),
        isActive: z.literal(true).optional(),
        deactivationReason: z.literal(true).optional(),
        deactivationDate: z.literal(true).optional(),
        name: z.literal(true).optional(),
        Note: z.literal(true).optional(),
        billedAmmount: z.literal(true).optional(),
        allowedAmmount: z.literal(true).optional(),
        copayAmmount: z.literal(true).optional(),
        cashAmount: z.literal(true).optional(),
        coveredAmount: z.literal(true).optional(),
        defferedAmount: z.literal(true).optional(),
        coinsuranceAmount: z.literal(true).optional(),
        isExamination: z.literal(true).optional(),
        groupId: z.literal(true).optional(),
        reviewStatusId: z.literal(true).optional(),
        entryRecordId: z.literal(true).optional(),
        medicalServiceId: z.literal(true).optional(),
    })
    .strict() as SchemaType;
