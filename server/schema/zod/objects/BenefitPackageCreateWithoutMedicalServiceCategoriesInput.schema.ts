/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreatecopayDistrubtionInputObjectSchema } from './BenefitPackageCreatecopayDistrubtionInput.schema';
import { BenefitPackageCreatethreasholdInputObjectSchema } from './BenefitPackageCreatethreasholdInput.schema';
import { InsurancePolicyCreateNestedOneWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutBenefitPackagesInput.schema';
import { BeneficiaryBalanceCreateNestedManyWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateNestedManyWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateWithoutMedicalServiceCategoriesInput>;
export const BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema: SchemaType = z
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
        name: z.string(),
        copayDistrubtion: z
            .union([z.lazy(() => BenefitPackageCreatecopayDistrubtionInputObjectSchema), z.number().array()])
            .optional(),
        threashold: z
            .union([z.lazy(() => BenefitPackageCreatethreasholdInputObjectSchema), z.number().array()])
            .optional(),
        insurancePolicy: z.lazy(() => InsurancePolicyCreateNestedOneWithoutBenefitPackagesInputObjectSchema),
        beneficiaryBalances: z
            .lazy(() => BeneficiaryBalanceCreateNestedManyWithoutBeneftiPackageInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
