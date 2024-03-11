/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInputObjectSchema } from './InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInput.schema';
import { InstitutionMedicalServiceWhereInputObjectSchema } from './InstitutionMedicalServiceWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { InstitutionRelationFilterObjectSchema } from './InstitutionRelationFilter.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { MedicalServiceRelationFilterObjectSchema } from './MedicalServiceRelationFilter.schema';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceWhereUniqueInput>;
export const InstitutionMedicalServiceWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        institutionId_medicalServiceId: z
            .lazy(() => InstitutionMedicalServiceInstitutionIdMedicalServiceIdCompoundUniqueInputObjectSchema)
            .optional(),
        AND: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => InstitutionMedicalServiceWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).array(),
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
        institutionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        medicalServiceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        basePrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        institution: z
            .union([
                z.lazy(() => InstitutionRelationFilterObjectSchema),
                z.lazy(() => InstitutionWhereInputObjectSchema),
            ])
            .optional(),
        medicalService: z
            .union([
                z.lazy(() => MedicalServiceRelationFilterObjectSchema),
                z.lazy(() => MedicalServiceWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
