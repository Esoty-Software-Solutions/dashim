/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCountOutputTypeSelectObjectSchema } from './BenefitPackageCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCountOutputTypeArgs>;
export const BenefitPackageCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BenefitPackageCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
