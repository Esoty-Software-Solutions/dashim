/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInput>;
export const BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
