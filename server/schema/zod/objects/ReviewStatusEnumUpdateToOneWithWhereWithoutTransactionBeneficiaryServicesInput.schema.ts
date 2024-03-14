/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';
import { ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUpdateToOneWithWhereWithoutTransactionBeneficiaryServicesInput>;
export const ReviewStatusEnumUpdateToOneWithWhereWithoutTransactionBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
