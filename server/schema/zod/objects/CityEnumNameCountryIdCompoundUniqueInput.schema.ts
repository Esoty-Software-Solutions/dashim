/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumNameCountryIdCompoundUniqueInput>;
export const CityEnumNameCountryIdCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        name: z.string(),
        countryId: z.string(),
    })
    .strict() as SchemaType;
