/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricCountOutputTypeSelectObjectSchema } from './FaceBiometricCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricCountOutputTypeArgs>;
export const FaceBiometricCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => FaceBiometricCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
