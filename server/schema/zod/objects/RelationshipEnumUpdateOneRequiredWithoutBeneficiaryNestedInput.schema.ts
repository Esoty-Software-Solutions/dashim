/* eslint-disable */
import { z } from 'zod';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateOrConnectWithoutBeneficiaryInput.schema';
import { RelationshipEnumUpsertWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpsertWithoutBeneficiaryInput.schema';
import { RelationshipEnumWhereUniqueInputObjectSchema } from './RelationshipEnumWhereUniqueInput.schema';
import { RelationshipEnumUpdateToOneWithWhereWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpdateToOneWithWhereWithoutBeneficiaryInput.schema';
import { RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInput>;
export const RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema).optional(),
        upsert: z.lazy(() => RelationshipEnumUpsertWithoutBeneficiaryInputObjectSchema).optional(),
        connect: z.lazy(() => RelationshipEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => RelationshipEnumUpdateToOneWithWhereWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
