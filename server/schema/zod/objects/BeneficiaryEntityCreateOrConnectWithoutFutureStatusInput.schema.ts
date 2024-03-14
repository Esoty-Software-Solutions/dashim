/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutFutureStatusInput>;
export const BeneficiaryEntityCreateOrConnectWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
