/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './BenefitPackageCreateManyInsurancePolicyInputEnvelope.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInput>;
export const BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema: SchemaType = z
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
        createMany: z.lazy(() => BenefitPackageCreateManyInsurancePolicyInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
                z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
