/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutCityInput>;
export const BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
