import { z } from 'zod';
import { RelationshipEnumWhereUniqueInputObjectSchema } from './RelationshipEnumWhereUniqueInput.schema';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => RelationshipEnumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
