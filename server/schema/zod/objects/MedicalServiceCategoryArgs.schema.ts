/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategorySelectObjectSchema } from './MedicalServiceCategorySelect.schema';
import { MedicalServiceCategoryIncludeObjectSchema } from './MedicalServiceCategoryInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryArgs>;
export const MedicalServiceCategoryArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema).optional(),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
