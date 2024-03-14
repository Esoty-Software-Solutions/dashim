/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInput>;
export const CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema).optional(),
        connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
