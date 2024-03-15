/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutStatusSetByInput>;
export const BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
