/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCountOutputTypeSelectObjectSchema } from './MedicalCenterCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCountOutputTypeArgs>;
export const MedicalCenterCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => MedicalCenterCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
