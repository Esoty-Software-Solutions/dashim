import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';
import { PatientServiceOrderByRelationAggregateInputObjectSchema } from './PatientServiceOrderByRelationAggregateInput.schema';
import { InstitutionMedicalServiceOrderByRelationAggregateInputObjectSchema } from './InstitutionMedicalServiceOrderByRelationAggregateInput.schema';
import { MedicalServiceTemplateOrderByWithRelationInputObjectSchema } from './MedicalServiceTemplateOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    deactivationDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterCode: z.lazy(() => SortOrderSchema).optional(),
    basePrice: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    templateId: z.lazy(() => SortOrderSchema).optional(),
    medicalCenter: z
      .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
      .optional(),
    patientServices: z
      .lazy(() => PatientServiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    institutionPricing: z
      .lazy(
        () =>
          InstitutionMedicalServiceOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    template: z
      .lazy(() => MedicalServiceTemplateOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const MedicalServiceOrderByWithRelationInputObjectSchema = Schema;
