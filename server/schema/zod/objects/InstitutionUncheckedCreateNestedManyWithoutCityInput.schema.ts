/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateWithoutCityInputObjectSchema } from './InstitutionCreateWithoutCityInput.schema';
import { InstitutionUncheckedCreateWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateWithoutCityInput.schema';
import { InstitutionCreateOrConnectWithoutCityInputObjectSchema } from './InstitutionCreateOrConnectWithoutCityInput.schema';
import { InstitutionCreateManyCityInputEnvelopeObjectSchema } from './InstitutionCreateManyCityInputEnvelope.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUncheckedCreateNestedManyWithoutCityInput>;
export const InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema),
                z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema).array(),
                z.lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema),
                z.lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InstitutionCreateOrConnectWithoutCityInputObjectSchema),
                z.lazy(() => InstitutionCreateOrConnectWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => InstitutionCreateManyCityInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
                z.lazy(() => InstitutionWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
