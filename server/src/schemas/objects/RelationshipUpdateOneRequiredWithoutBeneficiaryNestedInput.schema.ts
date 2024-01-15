import { z } from 'zod';
import { RelationshipCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateWithoutBeneficiaryInput.schema';
import { RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipUncheckedCreateWithoutBeneficiaryInput.schema';
import { RelationshipCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateOrConnectWithoutBeneficiaryInput.schema';
import { RelationshipUpsertWithoutBeneficiaryInputObjectSchema } from './RelationshipUpsertWithoutBeneficiaryInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './RelationshipWhereUniqueInput.schema';
import { RelationshipUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipUpdateWithoutBeneficiaryInput.schema';
import { RelationshipUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUpdateOneRequiredWithoutBeneficiaryNestedInput> =
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
      upsert: z
        .lazy(() => RelationshipUpsertWithoutBeneficiaryInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => RelationshipWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => RelationshipUpdateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () =>
              RelationshipUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RelationshipUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema =
  Schema;
