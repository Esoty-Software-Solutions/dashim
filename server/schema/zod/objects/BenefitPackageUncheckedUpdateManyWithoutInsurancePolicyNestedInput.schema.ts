/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutInsurancePolicyInput.schema';
import { BenefitPackageUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpsertWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './BenefitPackageCreateManyInsurancePolicyInputEnvelope.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInput.schema';
import { BenefitPackageScalarWhereInputObjectSchema } from './BenefitPackageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUncheckedUpdateManyWithoutInsurancePolicyNestedInput>;
export const BenefitPackageUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema).array(),
                z.lazy(() => BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BenefitPackageUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BenefitPackageUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BenefitPackageCreateManyInsurancePolicyInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BenefitPackageScalarWhereInputObjectSchema),
                z.lazy(() => BenefitPackageScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
