/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUpsertWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpsertWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateToOneWithWhereWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpdateToOneWithWhereWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInput>;
export const ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ReviewStatusCreateOrConnectWithoutBeneficiaryServiceInputObjectSchema).optional(),
        upsert: z.lazy(() => ReviewStatusUpsertWithoutBeneficiaryServiceInputObjectSchema).optional(),
        connect: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => ReviewStatusUpdateToOneWithWhereWithoutBeneficiaryServiceInputObjectSchema),
                z.lazy(() => ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
