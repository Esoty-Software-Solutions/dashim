/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInput>;
export const ReviewStatusEnumUpsertWithoutTransactionBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => ReviewStatusEnumUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedUpdateWithoutTransactionBeneficiaryServicesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema),
        ]),
        where: z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
