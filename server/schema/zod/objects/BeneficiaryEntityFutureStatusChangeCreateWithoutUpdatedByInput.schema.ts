/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { BeneficiaryEntityCreateNestedOneWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput>;
export const BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        changeDate: z.union([z.date(), z.string().datetime()]),
        futureStatus: z.boolean(),
        description: z.union([z.string(), z.null()]).optional().nullable(),
        CreatedBy: z.lazy(() => UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
        beneficiaryEntity: z.lazy(() => BeneficiaryEntityCreateNestedOneWithoutFutureStatusInputObjectSchema),
    })
    .strict() as SchemaType;
