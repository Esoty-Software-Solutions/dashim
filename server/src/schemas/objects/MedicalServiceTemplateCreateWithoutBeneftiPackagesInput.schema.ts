import { z } from 'zod';
import { MedicalServiceCreateNestedManyWithoutTemplateInputObjectSchema } from './MedicalServiceCreateNestedManyWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateCreateWithoutBeneftiPackagesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      deactivationDate: z.coerce.date().optional().nullable(),
      name: z.string(),
      dalilCode: z.string(),
      basePrice: z.string(),
      IsPriceVaried: z.boolean().optional(),
      description: z.string(),
      services: z
        .lazy(
          () => MedicalServiceCreateNestedManyWithoutTemplateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema =
  Schema;