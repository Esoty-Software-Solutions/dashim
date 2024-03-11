/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityUpdateManyMutationInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateManyWithWhereWithoutInsurancePolicyInput>;
export const BeneficiaryEntityUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
