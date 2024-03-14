/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInputObjectSchema } from './BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInput.schema';
import { BeneficiaryBalanceWhereInputObjectSchema } from './BeneficiaryBalanceWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BenefitPackageRelationFilterObjectSchema } from './BenefitPackageRelationFilter.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceWhereUniqueInput>;
export const BeneficiaryBalanceWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        beneficiaryId_beneftiPackageId: z
            .lazy(() => BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInputObjectSchema)
            .optional(),
        AND: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BeneficiaryBalanceWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).array(),
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        beneficiaryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneftiPackageId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        balancePending: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        balanceActual: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        beneficiary: z
            .union([
                z.lazy(() => BeneficiaryRelationFilterObjectSchema),
                z.lazy(() => BeneficiaryWhereInputObjectSchema),
            ])
            .optional(),
        beneftiPackage: z
            .union([
                z.lazy(() => BenefitPackageRelationFilterObjectSchema),
                z.lazy(() => BenefitPackageWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
