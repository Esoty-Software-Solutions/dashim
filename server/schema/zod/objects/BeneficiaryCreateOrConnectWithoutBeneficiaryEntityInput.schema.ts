/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInput>;
export const BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
