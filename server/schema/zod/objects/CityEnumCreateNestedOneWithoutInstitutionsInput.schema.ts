/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateWithoutInstitutionsInputObjectSchema } from './CityEnumCreateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedCreateWithoutInstitutionsInput.schema';
import { CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema } from './CityEnumCreateOrConnectWithoutInstitutionsInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateNestedOneWithoutInstitutionsInput>;
export const CityEnumCreateNestedOneWithoutInstitutionsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CityEnumCreateWithoutInstitutionsInputObjectSchema),
                z.lazy(() => CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema).optional(),
        connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
