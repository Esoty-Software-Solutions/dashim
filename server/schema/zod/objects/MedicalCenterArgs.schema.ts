/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterSelectObjectSchema } from './MedicalCenterSelect.schema';
import { MedicalCenterIncludeObjectSchema } from './MedicalCenterInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterArgs>;
export const MedicalCenterArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema).optional(),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
