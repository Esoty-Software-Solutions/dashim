/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUpsertWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUpsertWithoutBenefitPackagesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateToOneWithWhereWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUpdateToOneWithWhereWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUpdateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutBenefitPackagesNestedInput>;
export const InsurancePolicyUpdateOneRequiredWithoutBenefitPackagesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InsurancePolicyCreateOrConnectWithoutBenefitPackagesInputObjectSchema).optional(),
        upsert: z.lazy(() => InsurancePolicyUpsertWithoutBenefitPackagesInputObjectSchema).optional(),
        connect: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => InsurancePolicyUpdateToOneWithWhereWithoutBenefitPackagesInputObjectSchema),
                z.lazy(() => InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
