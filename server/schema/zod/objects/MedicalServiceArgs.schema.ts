/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceSelectObjectSchema } from './MedicalServiceSelect.schema';
import { MedicalServiceIncludeObjectSchema } from './MedicalServiceInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceArgs>;
export const MedicalServiceArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema).optional(),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
