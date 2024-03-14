/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryCreateManyBeneficiaryEntityInputEnvelopeObjectSchema } from './BeneficiaryCreateManyBeneficiaryEntityInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUncheckedUpdateManyWithoutBeneficiaryEntityNestedInput>;
export const BeneficiaryUncheckedUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(() => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema).array(),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(() => BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(() => BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryCreateManyBeneficiaryEntityInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
                z.lazy(() => BeneficiaryScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
