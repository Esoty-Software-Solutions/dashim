/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreatecopayDistrubtionInput>;
export const BenefitPackageCreatecopayDistrubtionInputObjectSchema: SchemaType = z
    .object({
        set: z.number().array(),
    })
    .strict() as SchemaType;
