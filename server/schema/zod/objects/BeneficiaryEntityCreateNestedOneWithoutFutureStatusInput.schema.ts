/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutFutureStatusInput.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateNestedOneWithoutFutureStatusInput>;
export const BeneficiaryEntityCreateNestedOneWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
