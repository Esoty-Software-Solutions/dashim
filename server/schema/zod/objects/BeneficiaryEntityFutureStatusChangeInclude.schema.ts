/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BeneficiaryEntityArgsObjectSchema } from './BeneficiaryEntityArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeInclude>;
export const BeneficiaryEntityFutureStatusChangeIncludeObjectSchema: SchemaType = z
    .object({
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        beneficiaryEntity: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
