/* eslint-disable */
import { z } from 'zod';
import { InstitutionArgsObjectSchema } from './InstitutionArgs.schema';
import { MedicalServiceArgsObjectSchema } from './MedicalServiceArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceSelect>;
export const InstitutionMedicalServiceSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        institution: z.union([z.boolean(), z.lazy(() => InstitutionArgsObjectSchema)]).optional(),
        institutionId: z.boolean().optional(),
        medicalService: z.union([z.boolean(), z.lazy(() => MedicalServiceArgsObjectSchema)]).optional(),
        medicalServiceId: z.boolean().optional(),
        basePrice: z.boolean().optional(),
    })
    .strict() as SchemaType;
