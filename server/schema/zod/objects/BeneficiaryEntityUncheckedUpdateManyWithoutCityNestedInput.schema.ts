/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutCityInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutCityInput.schema';
import { BeneficiaryEntityUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './BeneficiaryEntityUpsertWithWhereUniqueWithoutCityInput.schema';
import { BeneficiaryEntityCreateManyCityInputEnvelopeObjectSchema } from './BeneficiaryEntityCreateManyCityInputEnvelope.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInput.schema';
import { BeneficiaryEntityUpdateManyWithWhereWithoutCityInputObjectSchema } from './BeneficiaryEntityUpdateManyWithWhereWithoutCityInput.schema';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUncheckedUpdateManyWithoutCityNestedInput>;
export const BeneficiaryEntityUncheckedUpdateManyWithoutCityNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema),
                z.lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema).array(),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema),
                z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryEntityUpsertWithWhereUniqueWithoutCityInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUpsertWithWhereUniqueWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryEntityCreateManyCityInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryEntityUpdateManyWithWhereWithoutCityInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUpdateManyWithWhereWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
                z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
