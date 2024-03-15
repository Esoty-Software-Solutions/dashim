/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumWhereInputObjectSchema } from './RelationshipEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumUpsertWithoutBeneficiaryInput>;
export const RelationshipEnumUpsertWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
        where: z.lazy(() => RelationshipEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
