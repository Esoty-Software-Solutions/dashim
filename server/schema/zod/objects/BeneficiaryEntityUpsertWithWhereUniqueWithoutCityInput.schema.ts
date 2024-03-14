/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutCityInputObjectSchema } from './BeneficiaryEntityUpdateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutCityInput.schema';
import { BeneficiaryEntityCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpsertWithWhereUniqueWithoutCityInput>;
export const BeneficiaryEntityUpsertWithWhereUniqueWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutCityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutCityInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
