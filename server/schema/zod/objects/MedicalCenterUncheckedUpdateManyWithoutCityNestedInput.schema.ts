/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateWithoutCityInputObjectSchema } from './MedicalCenterCreateWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutCityInput.schema';
import { MedicalCenterCreateOrConnectWithoutCityInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutCityInput.schema';
import { MedicalCenterUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './MedicalCenterUpsertWithWhereUniqueWithoutCityInput.schema';
import { MedicalCenterCreateManyCityInputEnvelopeObjectSchema } from './MedicalCenterCreateManyCityInputEnvelope.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './MedicalCenterUpdateWithWhereUniqueWithoutCityInput.schema';
import { MedicalCenterUpdateManyWithWhereWithoutCityInputObjectSchema } from './MedicalCenterUpdateManyWithWhereWithoutCityInput.schema';
import { MedicalCenterScalarWhereInputObjectSchema } from './MedicalCenterScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUncheckedUpdateManyWithoutCityNestedInput>;
export const MedicalCenterUncheckedUpdateManyWithoutCityNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema),
                z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema).array(),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => MedicalCenterCreateOrConnectWithoutCityInputObjectSchema),
                z.lazy(() => MedicalCenterCreateOrConnectWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => MedicalCenterUpsertWithWhereUniqueWithoutCityInputObjectSchema),
                z.lazy(() => MedicalCenterUpsertWithWhereUniqueWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => MedicalCenterCreateManyCityInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => MedicalCenterUpdateWithWhereUniqueWithoutCityInputObjectSchema),
                z.lazy(() => MedicalCenterUpdateWithWhereUniqueWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => MedicalCenterUpdateManyWithWhereWithoutCityInputObjectSchema),
                z.lazy(() => MedicalCenterUpdateManyWithWhereWithoutCityInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => MedicalCenterScalarWhereInputObjectSchema),
                z.lazy(() => MedicalCenterScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
