import { z } from 'zod';
import { RelationshipCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateWithoutBeneficiaryInput.schema';
import { RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipUncheckedCreateWithoutBeneficiaryInput.schema';
import { RelationshipCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateOrConnectWithoutBeneficiaryInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './RelationshipWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipCreateNestedOneWithoutBeneficiaryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RelationshipCreateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () =>
              RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => RelationshipCreateOrConnectWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => RelationshipWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const RelationshipCreateNestedOneWithoutBeneficiaryInputObjectSchema =
  Schema;
