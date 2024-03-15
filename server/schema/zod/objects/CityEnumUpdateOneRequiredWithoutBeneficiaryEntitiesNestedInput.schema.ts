/* eslint-disable */
import { z } from 'zod';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUpsertWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpsertWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateToOneWithWhereWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpdateToOneWithWhereWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUpdateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput>;
export const CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema).optional(),
        upsert: z.lazy(() => CityEnumUpsertWithoutBeneficiaryEntitiesInputObjectSchema).optional(),
        connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => CityEnumUpdateToOneWithWhereWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => CityEnumUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => CityEnumUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
