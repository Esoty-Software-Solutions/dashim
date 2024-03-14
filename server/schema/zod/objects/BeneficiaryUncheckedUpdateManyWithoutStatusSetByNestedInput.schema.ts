/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutStatusSetByInput.schema';
import { BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutStatusSetByInput.schema';
import { BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInput.schema';
import { BeneficiaryCreateManyStatusSetByInputEnvelopeObjectSchema } from './BeneficiaryCreateManyStatusSetByInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInput.schema';
import { BeneficiaryUpdateManyWithWhereWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpdateManyWithWhereWithoutStatusSetByInput.schema';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUncheckedUpdateManyWithoutStatusSetByNestedInput>;
export const BeneficiaryUncheckedUpdateManyWithoutStatusSetByNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema).array(),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryCreateManyStatusSetByInputEnvelopeObjectSchema).optional(),
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
                z.lazy(() => BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryUpdateManyWithWhereWithoutStatusSetByInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateManyWithWhereWithoutStatusSetByInputObjectSchema).array(),
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
