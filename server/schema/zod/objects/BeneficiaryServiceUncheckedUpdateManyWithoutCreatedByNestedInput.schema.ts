/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutCreatedByInput.schema';
import { BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateManyCreatedByInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyCreatedByInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInput.schema';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema).array(),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryServiceCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
                z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
