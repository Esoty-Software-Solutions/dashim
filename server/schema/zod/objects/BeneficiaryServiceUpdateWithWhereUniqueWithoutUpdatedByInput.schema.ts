/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
