/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutRelationshipInputObjectSchema } from './BeneficiaryUpdateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedUpdateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInput>;
export const BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutRelationshipInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutRelationshipInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
