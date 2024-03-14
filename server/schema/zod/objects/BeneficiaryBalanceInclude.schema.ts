/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { BenefitPackageArgsObjectSchema } from './BenefitPackageArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceInclude>;
export const BeneficiaryBalanceIncludeObjectSchema: SchemaType = z
    .object({
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        beneftiPackage: z.union([z.boolean(), z.lazy(() => BenefitPackageArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
