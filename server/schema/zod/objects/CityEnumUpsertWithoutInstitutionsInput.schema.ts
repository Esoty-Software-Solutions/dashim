/* eslint-disable */
import { z } from 'zod';
import { CityEnumUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUpdateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedUpdateWithoutInstitutionsInput.schema';
import { CityEnumCreateWithoutInstitutionsInputObjectSchema } from './CityEnumCreateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedCreateWithoutInstitutionsInput.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpsertWithoutInstitutionsInput>;
export const CityEnumUpsertWithoutInstitutionsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => CityEnumUpdateWithoutInstitutionsInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutInstitutionsInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema),
        ]),
        where: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
