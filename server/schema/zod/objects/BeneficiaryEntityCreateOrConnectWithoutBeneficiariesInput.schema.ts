/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInput>;
export const BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
