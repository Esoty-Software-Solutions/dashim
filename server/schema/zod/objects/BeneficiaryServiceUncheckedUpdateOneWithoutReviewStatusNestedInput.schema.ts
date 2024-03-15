/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUpsertWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpsertWithoutReviewStatusInput.schema';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateToOneWithWhereWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpdateToOneWithWhereWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUncheckedUpdateOneWithoutReviewStatusNestedInput>;
export const BeneficiaryServiceUncheckedUpdateOneWithoutReviewStatusNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryServiceUpsertWithoutReviewStatusInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryServiceUpdateToOneWithWhereWithoutReviewStatusInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
