/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';
import { MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { BeneficiaryServiceListRelationFilterObjectSchema } from './BeneficiaryServiceListRelationFilter.schema';
import { InstitutionMedicalServiceListRelationFilterObjectSchema } from './InstitutionMedicalServiceListRelationFilter.schema';
import { MedicalServiceCategoryRelationFilterObjectSchema } from './MedicalServiceCategoryRelationFilter.schema';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceWhereUniqueInput>;
export const MedicalServiceWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        medicalCenterId_medicalCenterCode: z
            .lazy(() => MedicalServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema)
            .optional(),
        categoryId_medicalCenterId_medicalCenterCode: z
            .lazy(() => MedicalServiceCategoryIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema)
            .optional(),
        AND: z
            .union([
                z.lazy(() => MedicalServiceWhereInputObjectSchema),
                z.lazy(() => MedicalServiceWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => MedicalServiceWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => MedicalServiceWhereInputObjectSchema),
                z.lazy(() => MedicalServiceWhereInputObjectSchema).array(),
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
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        medicalCenterCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        basePrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        medicalCenterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        medicalCenter: z
            .union([
                z.lazy(() => MedicalCenterRelationFilterObjectSchema),
                z.lazy(() => MedicalCenterWhereInputObjectSchema),
            ])
            .optional(),
        beneficiaryServices: z.lazy(() => BeneficiaryServiceListRelationFilterObjectSchema).optional(),
        institutionPricing: z.lazy(() => InstitutionMedicalServiceListRelationFilterObjectSchema).optional(),
        category: z
            .union([
                z.lazy(() => MedicalServiceCategoryRelationFilterObjectSchema),
                z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
