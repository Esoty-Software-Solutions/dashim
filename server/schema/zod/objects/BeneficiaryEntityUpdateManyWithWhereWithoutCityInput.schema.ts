/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityUpdateManyMutationInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateManyWithWhereWithoutCityInput>;
export const BeneficiaryEntityUpdateManyWithWhereWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateManyWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
