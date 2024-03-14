/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCountOutputTypeSelectObjectSchema } from './MedicalServiceCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCountOutputTypeArgs>;
export const MedicalServiceCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => MedicalServiceCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
