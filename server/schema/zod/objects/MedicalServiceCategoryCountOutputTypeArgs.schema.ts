/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryCountOutputTypeSelectObjectSchema } from './MedicalServiceCategoryCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCountOutputTypeArgs>;
export const MedicalServiceCategoryCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => MedicalServiceCategoryCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
