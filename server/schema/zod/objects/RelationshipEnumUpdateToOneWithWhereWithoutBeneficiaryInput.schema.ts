/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumWhereInputObjectSchema } from './RelationshipEnumWhereInput.schema';
import { RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumUpdateToOneWithWhereWithoutBeneficiaryInput>;
export const RelationshipEnumUpdateToOneWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RelationshipEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
