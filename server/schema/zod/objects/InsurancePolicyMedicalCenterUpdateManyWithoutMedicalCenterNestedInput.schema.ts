/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelope.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCenterScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyWithoutMedicalCenterNestedInput>;
export const InsurancePolicyMedicalCenterUpdateManyWithoutMedicalCenterNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema).array(),
                z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema),
                z
                    .lazy(() => InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelopeObjectSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema),
                z
                    .lazy(() => InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema)
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema),
                z
                    .lazy(() => InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema)
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
