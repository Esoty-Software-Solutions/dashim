/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { CityEnumUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUpdateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedUpdateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateToOneWithWhereWithoutMedicalcentersInput>;
export const CityEnumUpdateToOneWithWhereWithoutMedicalcentersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => CityEnumUpdateWithoutMedicalcentersInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
