/* eslint-disable */
import { z } from 'zod';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateToOneWithWhereWithoutBeneficiaryEntitiesInput>;
export const CityEnumUpdateToOneWithWhereWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
