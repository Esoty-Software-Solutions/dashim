import { z } from 'zod';
import { BeneficiaryCreateWithoutGenderInputObjectSchema } from './BeneficiaryCreateWithoutGenderInput.schema';
import { BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutGenderInput.schema';
import { BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutGenderInput.schema';
import { BeneficiaryCreateManyGenderInputEnvelopeObjectSchema } from './BeneficiaryCreateManyGenderInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedCreateNestedManyWithoutGenderInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema),
          z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema).array(),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManyGenderInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUncheckedCreateNestedManyWithoutGenderInputObjectSchema =
  Schema;
