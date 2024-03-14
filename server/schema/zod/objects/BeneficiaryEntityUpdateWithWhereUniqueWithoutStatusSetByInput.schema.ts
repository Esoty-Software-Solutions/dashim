/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInput>;
export const BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
