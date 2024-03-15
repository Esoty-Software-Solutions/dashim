/* eslint-disable */
import { z } from 'zod';
import { InstitutionArgsObjectSchema } from './InstitutionArgs.schema';
import { MedicalServiceArgsObjectSchema } from './MedicalServiceArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceInclude>;
export const InstitutionMedicalServiceIncludeObjectSchema: SchemaType = z
    .object({
        institution: z.union([z.boolean(), z.lazy(() => InstitutionArgsObjectSchema)]).optional(),
        medicalService: z.union([z.boolean(), z.lazy(() => MedicalServiceArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
