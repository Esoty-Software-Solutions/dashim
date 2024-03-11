/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateemailInput>;
export const MedicalCenterCreateemailInputObjectSchema: SchemaType = z
    .object({
        set: z.string().array(),
    })
    .strict() as SchemaType;
