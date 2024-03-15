/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUpsertWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpsertWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateToOneWithWhereWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpdateToOneWithWhereWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput>;
export const InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema: SchemaType = z
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
        upsert: z.lazy(() => InsurancePolicyUpsertWithoutBeneficiaryEntitiesInputObjectSchema).optional(),
        connect: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => InsurancePolicyUpdateToOneWithWhereWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
