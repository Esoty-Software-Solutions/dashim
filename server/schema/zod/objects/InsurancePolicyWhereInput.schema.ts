/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { InstitutionRelationFilterObjectSchema } from './InstitutionRelationFilter.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { BeneficiaryEntityListRelationFilterObjectSchema } from './BeneficiaryEntityListRelationFilter.schema';
import { BenefitPackageListRelationFilterObjectSchema } from './BenefitPackageListRelationFilter.schema';
import { InsurancePolicyMedicalCenterListRelationFilterObjectSchema } from './InsurancePolicyMedicalCenterListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyWhereInput>;
export const InsurancePolicyWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => InsurancePolicyWhereInputObjectSchema),
                z.lazy(() => InsurancePolicyWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => InsurancePolicyWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InsurancePolicyWhereInputObjectSchema),
                z.lazy(() => InsurancePolicyWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        deactivationReason: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.lazy(() => DateTimeNullableFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
                z.null(),
            ])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        Accumulatedlimit: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        BalanceResetDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        issueDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        renewalDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        serviceEntryTimeWindow: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        institutionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        institution: z
            .union([
                z.lazy(() => InstitutionRelationFilterObjectSchema),
                z.lazy(() => InstitutionWhereInputObjectSchema),
            ])
            .optional(),
        beneficiaryEntities: z.lazy(() => BeneficiaryEntityListRelationFilterObjectSchema).optional(),
        benefitPackages: z.lazy(() => BenefitPackageListRelationFilterObjectSchema).optional(),
        medicalCenters: z.lazy(() => InsurancePolicyMedicalCenterListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
