/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInput>;
export const BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
