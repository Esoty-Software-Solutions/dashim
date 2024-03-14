/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCountOutputTypeSelectObjectSchema } from './BeneficiaryEntityCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCountOutputTypeArgs>;
export const BeneficiaryEntityCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BeneficiaryEntityCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
