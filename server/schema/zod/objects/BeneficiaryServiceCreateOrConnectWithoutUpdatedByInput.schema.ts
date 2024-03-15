/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutUpdatedByInput>;
export const BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
