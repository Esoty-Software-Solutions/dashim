/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceSelectObjectSchema } from './InstitutionMedicalServiceSelect.schema';
import { InstitutionMedicalServiceIncludeObjectSchema } from './InstitutionMedicalServiceInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceArgs>;
export const InstitutionMedicalServiceArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema).optional(),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
