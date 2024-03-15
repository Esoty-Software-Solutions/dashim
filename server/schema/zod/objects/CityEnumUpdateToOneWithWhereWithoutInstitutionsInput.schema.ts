/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { CityEnumUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUpdateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedUpdateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateToOneWithWhereWithoutInstitutionsInput>;
export const CityEnumUpdateToOneWithWhereWithoutInstitutionsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => CityEnumUpdateWithoutInstitutionsInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
