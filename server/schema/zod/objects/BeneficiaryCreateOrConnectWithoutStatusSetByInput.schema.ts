/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutStatusSetByInput>;
export const BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
