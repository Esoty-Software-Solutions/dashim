/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutCreatedByInput>;
export const BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
