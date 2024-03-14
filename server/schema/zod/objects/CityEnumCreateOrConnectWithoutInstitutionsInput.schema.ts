/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumCreateWithoutInstitutionsInputObjectSchema } from './CityEnumCreateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedCreateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateOrConnectWithoutInstitutionsInput>;
export const CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutInstitutionsInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
