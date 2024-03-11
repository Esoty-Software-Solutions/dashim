/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { BeneficiaryServiceCreateManyUpdatedByInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyUpdatedByInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInput>;
export const BeneficiaryServiceUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema).array(),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryServiceUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryServiceCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
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
                z.lazy(() => BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array(),
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
