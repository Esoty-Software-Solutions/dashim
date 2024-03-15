/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumWhereUniqueInputObjectSchema } from './ReviewStatusEnumWhereUniqueInput.schema';
import { ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInput>;
export const ReviewStatusEnumCreateOrConnectWithoutTransactionBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ReviewStatusEnumCreateWithoutTransactionBeneficiaryServicesInputObjectSchema),
            z.lazy(() => ReviewStatusEnumUncheckedCreateWithoutTransactionBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
