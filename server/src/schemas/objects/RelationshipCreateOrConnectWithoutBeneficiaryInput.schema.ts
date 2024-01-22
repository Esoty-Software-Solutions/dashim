import { z } from 'zod';
import { RelationshipWhereUniqueInputObjectSchema } from './RelationshipWhereUniqueInput.schema';
import { RelationshipCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateWithoutBeneficiaryInput.schema';
import { RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => RelationshipWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RelationshipCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RelationshipCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
