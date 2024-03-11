/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BeneficiaryEntityArgsObjectSchema } from './BeneficiaryEntityArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeSelect>;
export const BeneficiaryEntityFutureStatusChangeSelectObjectSchema: SchemaType = z
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
        changeDate: z.boolean().optional(),
        futureStatus: z.boolean().optional(),
        description: z.boolean().optional(),
        beneficiaryEntity: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityArgsObjectSchema)]).optional(),
        beneficiaryEntityId: z.boolean().optional(),
    })
    .strict() as SchemaType;
