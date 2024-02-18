import { z } from 'zod';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateOrConnectWithoutBeneficiaryInput.schema';
import { RelationshipEnumWhereUniqueInputObjectSchema } from './RelationshipEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumCreateNestedOneWithoutBeneficiaryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z.lazy(
            () =>
              RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => RelationshipEnumWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const RelationshipEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema =
  Schema;
