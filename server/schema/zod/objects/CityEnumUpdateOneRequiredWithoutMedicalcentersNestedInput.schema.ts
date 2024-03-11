/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedCreateWithoutMedicalcentersInput.schema';
import { CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema } from './CityEnumCreateOrConnectWithoutMedicalcentersInput.schema';
import { CityEnumUpsertWithoutMedicalcentersInputObjectSchema } from './CityEnumUpsertWithoutMedicalcentersInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateToOneWithWhereWithoutMedicalcentersInputObjectSchema } from './CityEnumUpdateToOneWithWhereWithoutMedicalcentersInput.schema';
import { CityEnumUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUpdateWithoutMedicalcentersInput.schema';
import { CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema } from './CityEnumUncheckedUpdateWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateOneRequiredWithoutMedicalcentersNestedInput>;
export const CityEnumUpdateOneRequiredWithoutMedicalcentersNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CityEnumCreateWithoutMedicalcentersInputObjectSchema),
                z.lazy(() => CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CityEnumCreateOrConnectWithoutMedicalcentersInputObjectSchema).optional(),
        upsert: z.lazy(() => CityEnumUpsertWithoutMedicalcentersInputObjectSchema).optional(),
        connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => CityEnumUpdateToOneWithWhereWithoutMedicalcentersInputObjectSchema),
                z.lazy(() => CityEnumUpdateWithoutMedicalcentersInputObjectSchema),
                z.lazy(() => CityEnumUncheckedUpdateWithoutMedicalcentersInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
