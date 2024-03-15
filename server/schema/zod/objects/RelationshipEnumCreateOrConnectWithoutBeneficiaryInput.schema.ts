/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumWhereUniqueInputObjectSchema } from './RelationshipEnumWhereUniqueInput.schema';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumCreateOrConnectWithoutBeneficiaryInput>;
export const RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => RelationshipEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
