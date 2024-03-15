/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateWithoutInstitutionsInputObjectSchema } from './CityEnumCreateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedCreateWithoutInstitutionsInput.schema';
import { CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema } from './CityEnumCreateOrConnectWithoutInstitutionsInput.schema';
import { CityEnumUpsertWithoutInstitutionsInputObjectSchema } from './CityEnumUpsertWithoutInstitutionsInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateToOneWithWhereWithoutInstitutionsInputObjectSchema } from './CityEnumUpdateToOneWithWhereWithoutInstitutionsInput.schema';
import { CityEnumUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUpdateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedUpdateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateOneRequiredWithoutInstitutionsNestedInput>;
export const CityEnumUpdateOneRequiredWithoutInstitutionsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CityEnumCreateWithoutInstitutionsInputObjectSchema),
                z.lazy(() => CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CityEnumCreateOrConnectWithoutInstitutionsInputObjectSchema).optional(),
        upsert: z.lazy(() => CityEnumUpsertWithoutInstitutionsInputObjectSchema).optional(),
        connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => CityEnumUpdateToOneWithWhereWithoutInstitutionsInputObjectSchema),
                z.lazy(() => CityEnumUpdateWithoutInstitutionsInputObjectSchema),
                z.lazy(() => CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
