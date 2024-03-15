/* eslint-disable */
import { z } from 'zod';
import { CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpsertWithoutBeneficiaryEntitiesInput>;
export const CityEnumUpsertWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
        where: z.lazy(() => CityEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
