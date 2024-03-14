/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInput.schema';
import { CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInput.schema';
import { BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateInput>;
export const BeneficiaryEntityCreateInputObjectSchema: SchemaType = z
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
        address: z.union([z.string(), z.null()]).optional().nullable(),
        StatusSetBy: z.lazy(() => UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
        city: z.lazy(() => CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema),
        insurancePolicy: z.lazy(() => InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema),
        beneficiaries: z.lazy(() => BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema).optional(),
        futureStatus: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
