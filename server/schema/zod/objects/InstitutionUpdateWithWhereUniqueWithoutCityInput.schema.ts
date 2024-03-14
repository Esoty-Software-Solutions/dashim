/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithoutCityInputObjectSchema } from './InstitutionUpdateWithoutCityInput.schema';
import { InstitutionUncheckedUpdateWithoutCityInputObjectSchema } from './InstitutionUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdateWithWhereUniqueWithoutCityInput>;
export const InstitutionUpdateWithWhereUniqueWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => InstitutionUpdateWithoutCityInputObjectSchema),
            z.lazy(() => InstitutionUncheckedUpdateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
