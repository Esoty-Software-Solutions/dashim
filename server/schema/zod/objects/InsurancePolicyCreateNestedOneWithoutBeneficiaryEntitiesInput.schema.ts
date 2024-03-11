/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInput>;
export const InsurancePolicyCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema)
            .optional(),
        connect: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
