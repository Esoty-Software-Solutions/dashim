/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutRelationshipInput>;
export const BeneficiaryUpdateManyWithWhereWithoutRelationshipInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateManyWithoutRelationshipInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
