import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BenefitPackageRelationFilterObjectSchema } from './BenefitPackageRelationFilter.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { InsurancePolicyRelationFilterObjectSchema } from './InsurancePolicyRelationFilter.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { PatientServiceListRelationFilterObjectSchema } from './PatientServiceListRelationFilter.schema';
import { PatientExaminationListRelationFilterObjectSchema } from './PatientExaminationListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PackageMedicalServicesWhereInputObjectSchema),
        z.lazy(() => PackageMedicalServicesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PackageMedicalServicesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PackageMedicalServicesWhereInputObjectSchema),
        z.lazy(() => PackageMedicalServicesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    beneftiPackageId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalServiceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    insurancePolicyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    price: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    beneftiPackage: z
      .union([
        z.lazy(() => BenefitPackageRelationFilterObjectSchema),
        z.lazy(() => BenefitPackageWhereInputObjectSchema),
      ])
      .optional(),
    medicalService: z
      .union([
        z.lazy(() => MedicalCenterRelationFilterObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
      ])
      .optional(),
    insurancePolicy: z
      .union([
        z.lazy(() => InsurancePolicyRelationFilterObjectSchema),
        z.lazy(() => InsurancePolicyWhereInputObjectSchema),
      ])
      .optional(),
    patientServices: z
      .lazy(() => PatientServiceListRelationFilterObjectSchema)
      .optional(),
    patientExaminations: z
      .lazy(() => PatientExaminationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PackageMedicalServicesWhereInputObjectSchema = Schema;
