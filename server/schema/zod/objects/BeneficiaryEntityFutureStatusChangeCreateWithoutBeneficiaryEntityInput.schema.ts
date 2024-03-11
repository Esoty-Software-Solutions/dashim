/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput>;
export const BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema: SchemaType = z
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
        UpdatedBy: z
            .lazy(() => UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
