/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionCreateWithoutCityInputObjectSchema } from './InstitutionCreateWithoutCityInput.schema';
import { InstitutionUncheckedCreateWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCreateOrConnectWithoutCityInput>;
export const InstitutionCreateOrConnectWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema),
            z.lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
