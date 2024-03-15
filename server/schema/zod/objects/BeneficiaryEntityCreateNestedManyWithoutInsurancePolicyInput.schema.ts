/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './BeneficiaryEntityCreateManyInsurancePolicyInputEnvelope.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInput>;
export const BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema).array(),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryEntityCreateManyInsurancePolicyInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
