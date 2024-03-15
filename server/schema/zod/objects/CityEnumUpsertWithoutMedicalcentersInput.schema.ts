/* eslint-disable */
import { z } from 'zod';
import { CityEnumUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUpdateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedUpdateWithoutMedicalcentersInput.schema';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpsertWithoutMedicalcentersInput>;
export const CityEnumUpsertWithoutMedicalcentersInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => CityEnumUpdateWithoutMedicalcentersInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema),
        ]),
        where: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
