/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInput.schema';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './InsurancePolicyMedicalCenterWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { InsurancePolicyRelationFilterObjectSchema } from './InsurancePolicyRelationFilter.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterWhereUniqueInput>;
export const InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        insurancePolicyId_medicalCenterId: z
            .lazy(() => InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInputObjectSchema)
            .optional(),
        AND: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereInputObjectSchema).array(),
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
        insurancePolicyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        medicalCenterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        insurancePolicy: z
            .union([
                z.lazy(() => InsurancePolicyRelationFilterObjectSchema),
                z.lazy(() => InsurancePolicyWhereInputObjectSchema),
            ])
            .optional(),
        medicalCenter: z
            .union([
                z.lazy(() => MedicalCenterRelationFilterObjectSchema),
                z.lazy(() => MedicalCenterWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
