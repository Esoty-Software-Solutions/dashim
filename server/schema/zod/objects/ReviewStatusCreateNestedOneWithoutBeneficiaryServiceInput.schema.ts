/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateNestedOneWithoutBeneficiaryServiceInput>;
export const ReviewStatusCreateNestedOneWithoutBeneficiaryServiceInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema).optional(),
        connect: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
