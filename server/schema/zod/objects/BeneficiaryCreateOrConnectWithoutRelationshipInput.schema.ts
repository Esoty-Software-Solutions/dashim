/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutRelationshipInput>;
export const BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
