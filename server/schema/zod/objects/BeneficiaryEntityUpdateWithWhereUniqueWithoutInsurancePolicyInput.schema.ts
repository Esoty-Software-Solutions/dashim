/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUpdateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInput>;
export const BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
