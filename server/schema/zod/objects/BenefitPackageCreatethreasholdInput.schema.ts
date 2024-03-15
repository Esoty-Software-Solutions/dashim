/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreatethreasholdInput>;
export const BenefitPackageCreatethreasholdInputObjectSchema: SchemaType = z
    .object({
        set: z.number().array(),
    })
    .strict() as SchemaType;
