/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const BeneficiaryServiceUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
