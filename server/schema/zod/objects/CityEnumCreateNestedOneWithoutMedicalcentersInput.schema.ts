/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';
import { CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateOrConnectWithoutMedicalcentersInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateNestedOneWithoutMedicalcentersInput>;
export const CityEnumCreateNestedOneWithoutMedicalcentersInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
                z.lazy(() => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema).optional(),
        connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
