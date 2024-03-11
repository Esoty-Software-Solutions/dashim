/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricSelectObjectSchema } from './FaceBiometricSelect.schema';
import { FaceBiometricIncludeObjectSchema } from './FaceBiometricInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricArgs>;
export const FaceBiometricArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema).optional(),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
