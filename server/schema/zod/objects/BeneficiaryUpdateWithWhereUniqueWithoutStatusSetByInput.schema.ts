/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInput>;
export const BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
