/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUncheckedCreateInput>;
export const BeneficiaryEntityUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        statusSetById: z.string(),
        cityId: z.string(),
        address: z.union([z.string(), z.null()]).optional().nullable(),
        insurancePolicyId: z.string(),
        beneficiaries: z
            .lazy(() => BeneficiaryUncheckedCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema)
            .optional(),
        futureStatus: z
            .lazy(
                () =>
                    BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema,
            )
            .optional(),
    })
    .strict() as SchemaType;
