/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateOrConnectWithoutMedicalcentersInput>;
export const CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
