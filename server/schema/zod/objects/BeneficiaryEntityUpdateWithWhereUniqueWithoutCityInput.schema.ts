/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutCityInputObjectSchema } from './BeneficiaryEntityUpdateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInput>;
export const BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutCityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
