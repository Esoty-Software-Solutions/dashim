/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInput>;
export const BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
