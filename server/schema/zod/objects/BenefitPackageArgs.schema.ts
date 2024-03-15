/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageSelectObjectSchema } from './BenefitPackageSelect.schema';
import { BenefitPackageIncludeObjectSchema } from './BenefitPackageInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageArgs>;
export const BenefitPackageArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BenefitPackageSelectObjectSchema).optional(),
        include: z.lazy(() => BenefitPackageIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
