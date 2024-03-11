/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpsertWithWhereUniqueWithoutInsurancePolicyInput>;
export const BenefitPackageUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
